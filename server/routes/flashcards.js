const router = require('express').Router();
let Flashcard = require('../models');


router.route('/').get((req, res) => {
    Flashcard.find()
        .then(flashcards => res.json(flashcards))      
        .catch(err => res.status(400).json(`Error: ${err}`));
})