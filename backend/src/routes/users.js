const { Router } = require('express');
const router = Router();

const { getUsers, deleteUsers, createtUsers } = require ('../controllers/users.controller');

router.route('/')
   .get(getUsers)
   .post(createtUsers);

   // http://localhost:4000/api/users/1
router.route('/:id')
   //.get()
   //.put()
   .delete(deleteUsers);
  


module.exports = router;