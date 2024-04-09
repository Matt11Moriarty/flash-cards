const { Schema, model } = require('mongoose');

const flashcardSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    frontText: {
        type: String,
        required: true,
        trim: true
    },
    backText: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        trim: true 
    }
});

const Flashcard = model('Flashcard', flashcardSchema);

module.exports = Flashcard;