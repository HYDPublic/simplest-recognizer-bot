let builder = require('botbuilder');
let customRecognizer = require('./custom-recognizer');
let connector = new builder.ConsoleConnector().listen();
let bot = new builder.UniversalBot(connector,s => s.send('?'));

bot.recognizer(customRecognizer);

bot.dialog('/dialog1', s => s.send('custom intent triggered')).triggerAction({ matches: 'custom' });