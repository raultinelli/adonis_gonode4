'use strict'

class ResetPassword {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      token: 'required',
      password: 'required|condirmed'
    }
  }
}

module.exports = ResetPassword
