import express from 'express';
import jwt from 'express-jwt';
import ctrlProfile from '../controllers/profile';
import ctrlAuth from '../controllers/authentication';

export let router = express.Router();

let auth = jwt({
  secret: process.env.JWT_TOKEN,
  userProperty: 'payload'
});

//profile
router.get('/profile', auth, ctrlProfile.profileRead);

//auth
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);