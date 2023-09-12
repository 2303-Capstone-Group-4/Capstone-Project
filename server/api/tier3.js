//This is tier 3 of information learned: Asking for information
const router = require("express").Router();
const axios = require("axios");
const OpenAI = require("openai");
require('dotenv').config();
module.exports = router;
// This code is for v4 of the openai package: npmjs.com/package/openai

const openai = new OpenAI({
  apiKey: process.env.OPEN_API_KEY,
});

router.get("/", async (req, res, next) => {
  try {
    const language = req.query.language;
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "user",
          content: `Provide the next response entirely in the following general JSON-object format:
          {
          "Info": {
          "English": "Hello",
          "Language": "Hola"
          },
          "Quiz": {
          "Questions": "What is 'Thank you' in Spanish?",
          "Options":[
          "Hola",
          "Buenos dias",
          "Gracias",
          "De nada"
          ],
          "Answers": "Gracias"
          }
          }
          
          Provide the following:
          - a list of 5 basic phrases asking for information in English for someone looking to learn introductory conversational ${language}
          - a quiz with 3 questions based on the list`,
        },
      ],
      temperature: 0,
      max_tokens: 3000,
      top_p: 0.2,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    res.send(JSON.parse(response.choices[0].message.content));
  } catch (err) {
    next(err);
  }
});
