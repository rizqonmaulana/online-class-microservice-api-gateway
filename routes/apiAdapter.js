const axios = require('axios')

module.exports = (baseUrl) => {
  const apiAdapter = axios.create({
    baseURL: baseUrl,
    timeout: process.env.TIMEOUT || 5000,
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return {
    get: (url, params) => {
      return apiAdapter.get(url, { params })
    }
  }
}