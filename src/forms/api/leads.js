const LEAD_URL = "https://crm.authorssale.com/api/lead/yRgM6fCTtsvQd4k5y0aiBOiLaZmbCEy0";

export async function submitLead(data) {
  const res = await fetch(LEAD_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || "Something went wrong. Please try again.");
  }
  return res.json().catch(() => ({}));
}