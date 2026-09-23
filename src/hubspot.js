// Paste the public portal ID and form GUID from HubSpot's form embed code here.
// These are identifiers, not an API key. Keep private tokens out of this repository.
export const hubspot = {
  portalId: '',
  formGuid: '',
};

export function isHubSpotConfigured() {
  return /^\d+$/.test(hubspot.portalId) && /^[0-9a-f]{8}-[0-9a-f-]{27,}$/i.test(hubspot.formGuid);
}

export async function submitEnquiryToHubSpot(form, enquiryText) {
  const data = new FormData(form);
  const fullName = String(data.get('name') || '').trim().split(/\s+/);
  const firstName = fullName.shift();
  const lastName = fullName.join(' ');
  const fields = [
    ['email', data.get('email')],
    ['firstname', firstName],
    ['lastname', lastName],
    ['company', data.get('company')],
    ['message', enquiryText],
  ].filter(([, value]) => value && String(value).trim()).map(([name, value]) => ({ name, value: String(value).trim() }));

  const response = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${hubspot.portalId}/${hubspot.formGuid}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      fields,
      context: { pageUri: window.location.href, pageName: document.title },
      legalConsentOptions: {
        consent: {
          consentToProcess: true,
          text: 'I agree to Loydtech processing my information to respond to this enquiry.',
        },
      },
    }),
  });
  if (!response.ok) throw new Error(`HubSpot submission failed (${response.status})`);
  return response;
}
