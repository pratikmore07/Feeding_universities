import { API_BASE_URL } from "./apiBaseUrl";

export async function submitCounsellingLead(leadData) {
  const response = await fetch(`${API_BASE_URL}/api/counselling-leads`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(leadData),
  });

  const data = await response.json();

  if (!response.ok) {
    const error = new Error(data.message || "Unable to submit counselling request");
    error.response = {
      data,
      status: response.status,
    };
    throw error;
  }

  return data;
}
