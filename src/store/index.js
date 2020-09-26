import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appointment: null
  },
  getters: {
    appointment: (state) => state.appointment,
    appointments: (state) => state.appointments
  },
  mutations: {
    goToConfirm(state, payload) {
      state.appointment = { ...payload, isCompleted: false}
    },
    createAppointment(state) {
      const appointments = JSON.parse(localStorage.getItem('appointments')) || []
      appointments.push(state.appointment)
      localStorage.setItem('appointments', JSON.stringify(appointments))
    },
    markAsCompleted(state, payload) {
      const appointments = JSON.parse(localStorage.getItem('appointments'))
      appointments[payload].isCompleted = !appointments[payload].isCompleted
      localStorage.setItem('appointments', JSON.stringify(appointments))
    },
    deleteAppointment(state, payload) {
      let appointments = JSON.parse(localStorage.getItem('appointments'))
      appointments.splice(payload, 1)
      localStorage.setItem('appointments', JSON.stringify(appointments))
    }
  },
})
