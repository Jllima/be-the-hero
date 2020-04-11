const express = require("express")
// validations
const  { celebrate, Segments, Joi } = require('celebrate')

const OngsController = require('./controllers/OngsController')
const IncidentsControlller = require('./controllers/IncidentsControlller')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')
const routes = express.Router()

// INCIDENTS
// validate pagination
routes.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number()
  })
}),IncidentsControlller.index)
routes.post('/incidents', IncidentsControlller.create)
// validate delete, validate param id
routes.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required()
  })
}),IncidentsControlller.delete)

// ONGS
routes.get('/ongs', OngsController.index)
// routes with validations
routes.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required().min(10).max(11),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2)
  })
}), OngsController.create)

// PROFILE
// validations headers
routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown()
}),ProfileController.index)

// SESSIONS
routes.post('/sessions', SessionController.create)

module.exports = routes