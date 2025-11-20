export default async function handler(req, res) {
  try {
    const { message, system } = req.body;

    if (!message) {
      return res.status(400).json({ error: "No message provided" });
    }

    // Proxy ko call karo
    const response = await fetch(`${process.env.VERCEL_URL}/api/proxy`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, system })
    });

    const data = await response.json();

    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
      }
