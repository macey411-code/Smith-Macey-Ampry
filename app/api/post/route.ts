export async function POST(request: Request) {
  // Get data!
  const formData = await request.json();

  const { name, email, comments } = formData;  // Extract Name, Email, and Comments

  // Slack Webhook 
  const slackWebhookUrl = "https://hooks.slack.com/services/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";

  // Create the payload to send to Slack
  const payload = {
    text: `New submission: \nName: ${name}\nEmail: ${email}\nComments: ${comments}`,
  };

  // Send the data to Slack
  await fetch(slackWebhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  // Respond back to the client
  return new Response("Form submitted successfully!");
}

export async function GET(request: Request) {
  return new Response("GET request");
}