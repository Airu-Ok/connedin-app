import express from 'express'
const router = express.Router()

import rateLimiter from 'express-rate-limit'
const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message: 'Muchas peticiones por hoy. Intentalo de nuevo dentro de 15 minutos',
})

import { register, login, updateUser } from '../controllers/authController.js'
import authenticateUser from '../middleware/auth.js'
router.route('/register').post(apiLimiter, register)
router.route('/login').post(apiLimiter, login)
router.route('/updateUser').patch(authenticateUser, updateUser)

export default router
