# Webhook-demo

A simple backend project built with **Node.js** and **Express.js** to understand and test the basic concept of **webhooks** using Postman.

## What is a Webhook?

A webhook allows one application to send real-time event data to another application through an HTTP request.

In this project, an Express server provides a webhook endpoint that receives event data through a `POST` request and processes the event based on its type.

## Tech Stack

* Node.js
* Express.js
* Postman
* Git & GitHub

## Project Structure

```text
webhook-demo/
│
├── routes/
│   └── webhook.js
│
├── server.js
├── package.json
├── package-lock.json
└── .gitignore
```

## How It Works

The server listens on port `5000` and exposes the following endpoint:

```text
POST /webhook
```

When an event is received, the server checks its `type`.

For example:

```json
{
  "type": "payment.success",
  "paymentId": "PAY-12345",
  "amount": 5000
}
```

If the event type is `payment.success`, the server logs:

```text
Payment Successful
```

The server then sends a successful response:

```json
{
  "message": "Webhook received successfully"
}
```

## Running the Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/zobiamasood/Webhook-demo.git
```

### 2. Navigate to the project

```bash
cd Webhook-demo
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the server

```bash
npm start
```

The server will run on:

```text
http://localhost:5000
```

## Testing with Postman

Create a new **POST** request in Postman:

```text
http://localhost:5000/webhook
```

Select:

**Body → raw → JSON**

Then send:

```json
{
  "type": "payment.success",
  "paymentId": "PAY-12345",
  "amount": 5000
}
```

You should receive:

```json
{
  "message": "Webhook received successfully"
}
```

## Learning Outcome

This project helped me understand:

* How webhooks work
* How to create a POST endpoint with Express
* How to receive and read JSON request data
* How event types can be handled conditionally
* How to test webhook endpoints using Postman
* Basic backend project structure with Express

## Future Improvements

Possible improvements include:

* Webhook signature verification
* Event validation
* Storing received events in a database
* Handling multiple event types
* Adding error handling
* Connecting the webhook to a real payment service

---

**Built as a backend learning project to understand webhook fundamentals.**
