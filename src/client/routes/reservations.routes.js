const express = require('express')
const listReservationsDatesService = require('../../business/services/reservation/list-reservations-dates.service')
const listReservationsHoursService = require('../../business/services/reservation/list-reservations-hours.service')
const router = express.Router()

router.get(`/Reservations/v1/reservations/dates`, async (req, res, next) => {
  try {
    const response = await listReservationsDatesService.execute()
    logger.info({ message: 'Fechas listadas', data: JSON.stringify(response) })
    res.json({ dates: response })
  } catch (error) {
    console.log('error: ', error.message)
    next(error)
  }
})

router.get(`/Reservations/v1/reservations/dates/:id`, async (req, res, next) => {
  try {
    const response = await listReservationsHoursService.execute(req.params.id)
    logger.info({ message: 'Horas listadas', data: JSON.stringify(response) })
    res.json({ hours: response })
  } catch (error) {
    console.log('error: ', error.message)
    next(error)
  }
})
module.exports = router
