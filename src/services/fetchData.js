const XMLHttpRequest = require('xhr2');

export default function fetchData(type, url, data) {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest()
    xhttp.open(type, url, true)
    xhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4) {
        (xhttp.status === 200)
          ? resolve(JSON.parse(xhttp.responseText))
          : reject(new Error('Error al solicitar datos de la API ', url))
      }
    }
    if (data !== undefined) {
      xhttp.send(JSON.stringify(data))
    } else {
        xhttp.send()
    }
  })
}
