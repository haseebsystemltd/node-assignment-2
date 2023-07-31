const express = require('express');
const router = express.Router();


const userController = require('./controllers/userController');

const authenticateUser = require('./middlewares/authenticateUser');


/** USER ROUTES  */
router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.post('/deleteUser/:id', authenticateUser, userController.deleteUser);
router.get('/getUser/:id', authenticateUser, userController.getUser);
router.post('/updateUser/:id', authenticateUser, userController.updateUser);

module.exports = router;