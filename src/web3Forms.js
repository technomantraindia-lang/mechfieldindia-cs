const WEB3FORMS_ACCESS_KEY = "93d12a10-241b-4f4b-852b-ccdabeb9c15c";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export async function submitWeb3Form(form, formSource) {
  const data = new FormData(form);
  data.set("access_key", WEB3FORMS_ACCESS_KEY);
  data.set("from_name", "Mechfield India Website");
  data.set("form_source", formSource);

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    body: data,
    headers: {
      Accept: "application/json"
    }
  });

  const result = await response.json().catch(() => ({}));

  if (!response.ok || !result.success) {
    throw new Error(result.message || result.error || "Form submission failed. Please try again.");
  }

  return result;
}
