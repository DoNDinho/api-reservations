'use strict'
const reservationRepository = require('../../../data/repository/reservation.repository')
const { parseReservationDate } = require('../../converter/reservation-date.converter')

const execute = async () => {
  try {
    const reservationData = await listReservationDates()
    const dates = reservationData.map((date) => parseReservationDate(date))
    return dates
  } catch (error) {
    throw error
  }
}

const listReservationDates = async () => {
  try {
    const result = await reservationRepository.listReservationDates()
    return result
  } catch (error) {
    throw { httpCode: 422, message: error.message }
  }
}

module.exports = { execute }
