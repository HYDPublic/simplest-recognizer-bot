let builder = require('botbuilder');
let connector = new builder.ConsoleConnector().listen();
let bot = new builder.UniversalBot(connector,s => s.send('?'));

bot.recognizer(new builder.LuisRecognizer(process.env.LUIS_ENDPOINT));

bot.dialog('/dialog1', s => s.send('dialog1')).triggerAction({ matches: 'intent1' });
bot.dialog('/dialog2', s => s.send('dialog2')).triggerAction({ matches: 'intent2' });