export interface GoogleSheetApplicationPayload {
  jobTitle: string;
  jobCategory?: string;
  name: string;
  email: string;
  phone: string;
  experience: string;
  resumeUrl: string;
  portfolioUrl: string;
  coverLetter: string;
  source: string;
  appliedAt: string;
}

/**
 * Appends application data simultaneously to a Google Sheet.
 * Reads GOOGLE_SHEET_WEBHOOK_URL from environment variables.
 */
export async function appendApplicationToGoogleSheet(
  payload: GoogleSheetApplicationPayload
): Promise<boolean> {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;

  if (!webhookUrl) {
    console.warn(
      "[GoogleSheets] GOOGLE_SHEET_WEBHOOK_URL is not configured in .env.local. Skipping sheet append."
    );
    return false;
  }

  try {
    const formattedDate = new Date(payload.appliedAt).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });

    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...payload,
        formattedDate,
      }),
    });

    if (res.ok) {
      console.log(`[GoogleSheets] Successfully pushed application for ${payload.name} (${payload.email}) to Google Sheet!`);
      return true;
    } else {
      const errText = await res.text().catch(() => "");
      console.error(
        `[GoogleSheets] Webhook returned status ${res.status}: ${errText}`
      );
      return false;
    }
  } catch (err) {
    console.error("[GoogleSheets] Failed to append application to Google Sheet:", err);
    return false;
  }
}
