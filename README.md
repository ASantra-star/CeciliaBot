# Cecilia - Mental Health Chatbot for Students
### Made as a project for participation in Gen AI Exchange Hackathon by Google(2024)

Cecilia is a compassionate mental health chatbot designed to provide emotional and mental health support to students. Whether you're dealing with exam stress, career pressure, personal issues, or anxiety, Cecilia is here to listen and offer empathy, motivational quotes, and well-being tips. If distress or suicidal tendencies are detected, Cecilia will respond with urgency, providing helpful resources and support. 

## Features
- **Empathetic Conversations**: Offers emotionally intelligent responses to users based on their emotional state.
- **Sentiment Detection**: Recognizes user distress, stress, and suicidal tendencies through trigger word detection.
- **Motivational Support**: Provides quotes, well-being tips, and inspirational stories.
- **Urgent Assistance**: Offers helpline numbers and asks if users need to be connected with a professional.
- **Open-Ended Questions**: Encourages users to open up and share their thoughts.

---

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/ASantra-star/CeciliaBot.git
    ```
2. **Navigate to the project directory**:
    ```bash
    cd cecilia-chatbot
    ```
3. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Set up your environment variables**:
    - Create a `.env` file in the root directory and add your Google API key:
      ```bash
      GOOGLE_API_KEY=your_google_api_key
      ```

---

## Running the Application

1. **Start the server**:
    ```bash
    npm start
    ```

2. **Access the chatbot interface** by navigating to:
    ```
    http://localhost:3000
    ```

---

## API Endpoints

### `POST /chat`
- **Description**: Handles user input and generates a chatbot response using Google's Generative AI API.
- **Request Body**:
    ```json
    {
      "userInput": "I'm feeling overwhelmed with exams."
    }
    ```
- **Response**:
    ```json
    {
      "response": "I'm really sorry you're feeling this way. Exams can be stressful, but remember to take breaks and focus on your well-being."
    }
    ```

### `GET /`
- **Description**: Serves the chatbot interface (HTML page).

---

## Tech Stack

- **Backend**: [Node.js](https://nodejs.org/) with [Express.js](https://expressjs.com/)
- **AI Model**: [Google Generative AI](https://cloud.google.com/generative-ai)
- **Frontend**: HTML, CSS, JavaScript
- **NLP**: Sentiment analysis and trigger word detection for mental health support
- **Body Parsing**: `body-parser` for parsing incoming requests

---

## System Instructions for Cecilia

Cecilia operates with the following behavior rules:
- **Empathy First**: Responds empathetically to any user emotional state.
- **Detect Distress**: Identifies stress, distress, and potential suicidal thoughts through text.
- **Supportive Guidance**: Offers supportive messages, uplifting quotes, and directs to professional help if needed.
- **Helplines**: Shares helpline numbers for users in distress.

---

## How to Contribute

Contributions are welcome! Here's how you can help:

1. Fork the project
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request

---


## Acknowledgements

- Thanks to [Google Generative AI](https://cloud.google.com/generative-ai) for the powerful AI engine.
- Special thanks to mental health professionals who help guide and inspire projects like these.
  
---

