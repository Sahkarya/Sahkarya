const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv");
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function summary(message) {
  
  

    const prompt = `Can you please summarize this message in only 5 words words +
      ${JSON.stringify(message)}`;
  
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    return text;
  

  // Extract data using the entire serverData object
  
}
module.exports = summary;

