'use strict'
const reservationRepository = require('../../../data/repository/reservation.repository')
const { parseHourReservation } = require('../../converter/reservation-hour.converter')

const execute = async (id) => {
  try {
    const reservationData = await listReservationHours(parseInt(id))
    const hours = reservationData.map((hour) => parseHourReservation(hour))
    return hours
  } catch (error) {
    throw error
  }
}

const listReservationHours = async (id) => {
  try {
    const result = await reservationRepository.listReservationHours(id)
    return result
  } catch (error) {
    throw { httpCode: 422, message: error.message }
  }
}

module.exports = { execute }
