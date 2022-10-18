'use strict'
const parseHourReservation = (reservationData) => {
  return {
    code: reservationData.ID_RESERVA,
    name: reservationData.HORA.substring(0, reservationData.HORA.length - 3)
  }
}

module.exports = { parseHourReservation }
