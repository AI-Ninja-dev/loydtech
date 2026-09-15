import './globals.css';
import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import Header from '@/components/site-header';
import Footer from '@/components/site-footer';
const geist=Geist({subsets:['latin'],display:'swap'});
export const metadata: Metadata={title:{default:'Loydtech | Connected systems. Clearer operations.',template:'%s | Loydtech'},description:'IoT, asset tracking, remote monitoring and operational visibility. Explore a practical connected solution with Loydtech Digital Solutions.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en-ZA"><body className={geist.className}><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main">{children}</main><Footer/></body></html>}
