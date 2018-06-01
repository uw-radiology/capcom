const service = {
  getStudies = async () => {
    return fetch(url, {
      body: JSON.stringify(data), // must match 'Content-Type' header
      headers: {
        'content-type': 'application/json'
      },
      method: 'GET'
    })
      .then(response => response.json()) // parses response to JSON
  }
}

export {
  service
}