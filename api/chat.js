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
          { role: "system", content: system || "You are a sister AI." },
          { role: "user", content: message }
        ]
      })
    });

    const data = await response.json();

    let reply =
      data?.choices?.[0]?.message?.content ||   // normal reply
      data?.choices?.[0]?.text ||               // alt reply (text models)
      data?.choices?.[0]?.delta?.content ||     // streaming-type reply
      null;

    res.status(200).json({ reply });

  } catch (e) {
    res.status(500).json({ reply: null, error: e.toString() });
  }
}
