const { Router } = require('express');
const router = Router();

const { getNotes, createNote, updateNote, getNote, deleteNote } = require('../controllers/notes.controller');

router.route('/')
   .get(getNotes)
   .post(createNote)

   // .post()

router.route('/:id')
   .get(getNote)
   .put(updateNote)
   .delete(deleteNote)

module.exports = router;