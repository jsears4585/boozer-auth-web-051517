const baseURL = 'http://localhost:3000/api/v1'

export default class AuthAdapter {

  static login = loginParams => {
    return fetch(`${baseURL}/login`, {
      method: 'POST',
      body: JSON.stringify(loginParams),
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
        'Authorization': localStorage.getItem('token')
      }
    }).then(res => res.json())
  }

}
