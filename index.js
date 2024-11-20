const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
require('dotenv').config();

const app = express();
const PORT = 8080;


if (!process.env.BOT_TOKEN) {
    console.error("BOT_TOKEN aniqlanmadi. Iltimos, .env faylni tekshiring.");
    process.exit(1);
}

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "Hello World");
});

app.get('/', (req, res) => {
    res.send('Telegram bot ishlayapti!');
});

app.listen(PORT, () => {
    console.log(`Server http://localhost:${PORT} da ishlayapti`);
});
