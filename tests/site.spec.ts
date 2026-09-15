import { test, expect } from '@playwright/test';
test('all pages load and internal links have destinations',async({page,request})=>{
 const paths=['/','/solutions','/products','/use-cases','/about','/resources','/contact','/privacy'];
 for(const path of paths){await page.goto(path);await expect(page.locator('h1')).toHaveCount(1);const links=await page.locator('a[href^="/"]').evaluateAll(nodes=>[...new Set(nodes.map(n=>n.getAttribute('href')!))]);for(const link of links){expect((await request.get(link)).ok(),link).toBeTruthy();}}
});
test('platform modes, enquiry prefill and download work',async({page})=>{
 await page.goto('/products');await page.getByRole('button',{name:'Condition monitoring'}).click();await expect(page.locator('.dashboard')).toContainText('4.2');await page.getByRole('button',{name:'Operational workflows'}).click();await expect(page.locator('.dashboard')).toContainText('Review condition event');
 await page.getByRole('link',{name:'Discuss the platform'}).click();await expect(page.getByRole('textbox',{name:'Project area'})).toHaveValue('Sentinel 365');
 await page.getByRole('textbox',{name:'Your name'}).fill('Demo reviewer');await page.getByRole('textbox',{name:'Work email'}).fill('review@example.com');await page.getByRole('textbox',{name:'What would you like'}).fill('Review a demonstration asset tracking project.');await page.getByRole('checkbox').check();const download=page.waitForEvent('download');await page.getByRole('button',{name:'Download a copy instead'}).click();expect((await download).suggestedFilename()).toBe('loydtech-project-enquiry.txt');
});
test('responsive pages and keyboard mobile navigation',async({page})=>{
 for(const width of [320,390,768,1440]){await page.setViewportSize({width,height:900});for(const path of ['/','/solutions','/products','/contact']){await page.goto(path);expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`${path} at ${width}`).toBeTruthy();}}
 await page.setViewportSize({width:390,height:844});await page.goto('/');await page.getByRole('button',{name:'Open navigation'}).click();await expect(page.getByRole('dialog')).toBeVisible();await page.keyboard.press('Escape');await expect(page.getByRole('dialog')).not.toBeVisible();await expect(page.getByRole('button',{name:'Open navigation'})).toBeFocused();
 await page.screenshot({path:'test-results/loydtech-mobile.png',fullPage:true});await page.setViewportSize({width:1440,height:1000});await page.screenshot({path:'test-results/loydtech-desktop.png',fullPage:true});
});

test('dark theme and reduced-motion remain readable',async({page})=>{
 await page.emulateMedia({reducedMotion:'reduce'});await page.goto('/');
 await expect(page.locator('body')).toHaveCSS('background-color','rgb(8, 11, 10)');
 await expect(page.locator('.pin').first()).toHaveCSS('animation-name','none');
 await page.locator('.platform-explorer').scrollIntoViewIfNeeded();await expect(page.locator('.platform-explorer')).toHaveCSS('opacity','1');
 await page.getByRole('button',{name:'Condition monitoring'}).click();await expect(page.locator('.demo-chart path').last()).toHaveCSS('stroke-dashoffset','0px');
 await page.setViewportSize({width:1440,height:1000});await page.goto('/');await page.screenshot({path:'test-results/loydtech-dark-desktop.png',fullPage:true});
 await page.setViewportSize({width:390,height:844});await page.screenshot({path:'test-results/loydtech-dark-mobile.png',fullPage:true});
});
