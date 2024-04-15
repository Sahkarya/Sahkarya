const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv");
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

export default async function run(message) {
  
  
    const extractedData = extractMessagesAndAddresses(message);

    const prompt = `Can you please summarize this data +
      ${JSON.stringify(extractedData)}`;
  
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    return text;
  

  // Extract data using the entire serverData object
  
}

