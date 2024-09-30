// Load environment variables from .env file
require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Get the API key from environment variables
const apiKey = process.env.GOOGLE_API_KEY; // Store your API key in environment variables for security.
const genAI = new GoogleGenerativeAI(apiKey);

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (like HTML, CSS, etc.)
app.use(express.static("public"));


// Setup chatbot model with system instructions
const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: `You are a mental health chatbot named Cecilia. Your job is to provide emotional and mental health support for students. Students face mental health challenges due to a variety of reasons like exams, jobs, careers, family, and personal issues. You must determine the cause of their depression and:
    Offer empathetic responses to users based on their emotional state.
    Recognize and respond appropriately to distress, anxiety, or suicidal tendencies.
    Provide motivational quotes, stories, and well-being tips to users based on their needs.
    Offer helpline numbers and urgent support when necessary.
    Based on the detected sentiment, you should:\n
  For positive/neutral: Offer words of encouragement.\n
  For stressed: Respond with supportive messages.\n
  For distressed: Provide empathetic responses and guide them toward further assistance.\n\n
  The chatbot will ask open-ended questions to encourage users to share their emotions\n
  Implement a trigger word detection system that identifies phrases associated with suicidal thoughts. 
  You should respond with empathy, offering urgent support. 
  Provide helpline numbers (e.g., national or local suicide prevention helplines). 
  If possible, ask the user if they would like to be connected to a professional for live assistance.\n\n
  You will also include motivational quotes, inspirational stories, or mental health tips to provide emotional upliftment.\n\n
  Do not use unnecesary emogis and emoticons`,
  });


// Set up the configuration for content generation
const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  // Route to handle user input from the web interface
  app.post("/chat", async (req, res) => {
    const userInput = req.body.userInput;
  
    try {
      const parts = [{ text: userInput }]; // Just send user input without 'input:' prefix
      const result = await model.generateContent({
        contents: [{ role: "user", parts }],
        generationConfig,
      });
  
      const botResponse = result.response.text();
      res.json({ response: botResponse });
    } catch (error) {
      console.error("Error generating response:", error);
      res.status(500).json({ error: "Failed to generate response." });
    }
  });
  
  // Serve the chat interface
  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });
  
  // Start the server
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });