const express = require("express");

const webhookRoute = require("./routes/webhook");

const app = express();

app.use(express.json());

app.use("/webhook", webhookRoute);


app.listen(5000, () => {
    console.log("Server running on port 5000");
});