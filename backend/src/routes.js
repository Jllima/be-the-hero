const express = require("express")
const OngsController = require('./controllers/OngsController')
const IncidentsControlller = require('./controllers/IncidentsControlller')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')
const routes = express.Router()

// INCIDENTS
routes.get('/incidents', IncidentsControlller.index)
routes.post('/incidents', IncidentsControlller.create)
routes.delete('/incidents/:id', IncidentsControlller.delete)

// ONGS
routes.get('/ongs', OngsController.index)
routes.post('/ongs', OngsController.create)

// PROFILE
routes.get('/profile', ProfileController.index)


// SESSIONS
routes.post('/sessions', SessionController.create)

module.exports = routes