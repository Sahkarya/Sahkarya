const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv");
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function run() {
  const serverResponse = await fetch("http://localhost:80/api/data/admin", {
    method: "GET",
  });

  if (!serverResponse.ok) {
    throw new Error(`Server responded with status: ${serverResponse.status}`);
  }

  // Parse the response (assuming JSON format)
  const serverData = await serverResponse.json();

  function extractMessagesAndAddresses(newData) {
    const extractedData = [];
    for (let i = 0; i < newData.length; i++) {
      const message = newData[i].message;
      const address = newData[i].address;
      const extractedItem = {
        message,
        address,
      };
      extractedData.push(extractedItem);
    }
    return extractedData;
  }

  // Extract data using the entire serverData object
  const extractedData = extractMessagesAndAddresses(serverData.msg);

  const prompt = `Can you please summarize this data, also convert latitudes and longitudes into actual location+
    ${JSON.stringify(extractedData)}`;

  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();
