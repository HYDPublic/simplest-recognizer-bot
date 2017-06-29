module.exports = {
    recognize: function (context, callback) {

        callback.call(null, null, {
            entities: [],
            intent: 'custom',
            intents: [],
            score: 1
        });
    }
}