export default async function handler(req, res) {
  try {
    const { message, system } = req.body;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: system || "You are export const config = {
  api: {
    bodyParser: true
  }
};

export default async function handler(req, res) {
  try {
    const { message, system } = req.body;

    if(!message){
      return res.status(400).json({ reply: null, error: "Message missing" });
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: system || "You are a sister AI." },
          { role: "user", content: message }
        ]
      })
    });

    const data = await response.json();

    const reply =
      data?.choices?.[0]?.message?.content ||
      data?.choices?.[0]?.text ||
      null;

    res.status(200).json({ reply });

  } catch (e) {
    res.status(500).json({ reply: null, error: e.toString() });
  }
          }
