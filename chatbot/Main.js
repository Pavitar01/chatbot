const express = require("express");
const app = express();

// Predefined set of questions and answers
const qaPairs = [
  {
    question: "Who are you",
    answer: "My name is Chatbot.",
  },
  {
    question: "tell me a joke",
    answer: "Your name 😁😁😁",
  },
  {
    question: "Hi",
    answer: "Hello, How are your...",
  },
  {
    question: "Hello",
    answer: "Hi,How about you...",
  },
  {
    question: "fine",
    answer: "oh nice what are doing today",
  },
  {
    question: "nothing",
    answer: "why bro...",
  },
  {
    question: "who made you",
    answer: "The one who is presenting me😁😁",
  },
  {
    question: "How are you doing",
    answer: "I am doing well, thank you.",
  },
  {
    question: "why",
    answer: "Because i am in my updating phase....",
  },

  {
    question: "What is the capital of India",
    answer: "The capital of India is New Delhi.",
  },
  {
    question: "Which river is known as the Ganga in India",
    answer: "The Ganga is the Indian name for the River Ganges.",
  },
  {
    question: "What is the national animal of India",
    answer: "The national animal of India is the Bengal tiger....",
  },
  {
    question: "Who is the current Prime Minister of India",
    answer: "The current Prime Minister of India is Narendra Modi.",
  },
  {
    question: "What is the national flower of India",
    answer: "The national flower of India is the lotus.",
  },
  {
    question: "What is the weather like today",
    answer:
      "I am sorry, but I cannot answer that question as I am just a useless chatbot.",
  },
];

// Serve the HTML page when the user visits the root URL
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

// Handle POST requests to the /query endpoint
app.post("/query", function (req, res) {
  let query = req.query.query;

  // Search the qaPairs array for a matching question
  let answer = "I am sorry, but I do not understand your question.";

  for (let i = 0; i < qaPairs.length; i++) {
    if (qaPairs[i].question.toLowerCase() === query.toLowerCase()) {
      answer = qaPairs[i].answer;
      break;
    }
  }

  // Send the answer back to the client
  res.send(answer);
});

// Start the server and listen on port 3000
const port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log("Server listening on port :" + port);
});
