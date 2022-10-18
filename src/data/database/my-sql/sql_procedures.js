'use strict'
const listReservationDates = () => {
  return {
    name: 'SP_LISTAR_FECHAS_RESERVA',
    statements: [`CALL SP_LISTAR_FECHAS_RESERVA();`],
    values: []
  }
}

const listReservationHours = (id) => {
  return {
    name: 'SP_LISTAR_HORAS_RESERVA',
    statements: [`CALL SP_LISTAR_HORAS_RESERVA(${id});`],
    values: []
  }
}

module.exports = {
  listReservationDates,
  listReservationHours
}
