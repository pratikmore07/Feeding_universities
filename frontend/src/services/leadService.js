import { API_BASE_URL } from "./apiBaseUrl";

export async function submitLead(leadData) {
  const response = await fetch(`${API_BASE_URL}/api/leads`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(leadData),
  });

  const data = await response.json();

  if (!response.ok) {
    const error = new Error(data.message || "Unable to submit lead");
    error.response = {
      data,
      status: response.status,
    };
    throw error;
  }

  return data;
}

export async function submitBrochureLead(leadData) {
  const response = await fetch(
    `${API_BASE_URL}/api/brochure-leads`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(leadData),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    const error = new Error(
      data.message || "Unable to submit brochure lead"
    );

    error.response = {
      data,
      status: response.status,
    };

    throw error;
  }

  return data;
}

export async function submitMetaLead(leadData) {
  const response = await fetch(
    `${API_BASE_URL}/api/meta-leads`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(leadData),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    const error = new Error(
      data.message || "Unable to submit Meta lead"
    );

    error.response = {
      data,
      status: response.status,
    };

    throw error;
  }

  return data;
}