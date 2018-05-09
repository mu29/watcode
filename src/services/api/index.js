import 'isomorphic-fetch'
import { stringify } from 'query-string'
import { apiUrl } from 'config'

export const parseEndpoint = (endpoint, params) => {
  const version = endpoint.replace(/^\/(v\d)\/.*$/, '$1')
  const url = endpoint.startsWith('http') ? endpoint : apiUrl[version] + endpoint
  const querystring = params ? `?${stringify(params)}` : ''
  return `${url}${querystring}`
}

export const parseSettings = ({ method, data, token }) => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }

  const settings = {
    body: data ? JSON.stringify(data) : undefined,
    method,
    headers: Object.assign(headers, token && { Authorization: token }),
  }

  return settings
}

export const checkStatus = async (response) => {
  if (response.ok) {
    return response
  }

  throw await response.json()
}

export const parseJSON = response => response.json()

export class Client {
  token = '';

  setToken = (token) => {
    this.token = token
  }

  get = (endpoint, settings) =>
    this.request(endpoint, { method: 'GET', ...settings, token: this.token })

  delete = (endpoint, settings) =>
    this.request(endpoint, { method: 'DELETE', ...settings, token: this.token })

  post = (endpoint, settings) =>
    this.request(endpoint, { method: 'POST', ...settings, token: this.token })

  put = (endpoint, settings) =>
    this.request(endpoint, { method: 'PUT', ...settings, token: this.token })

  request = (endpoint, settings) => fetch(
    parseEndpoint(endpoint, settings.params),
    parseSettings(settings),
  ).then(checkStatus).then(parseJSON)
}

export const api = new Client()
