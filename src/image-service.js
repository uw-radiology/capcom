const getStudies = async () => {
  const result = await fetch('https://hackathon.siim.org/dicomweb/studies/', {
      headers: {
        'content-type': 'application/json',
        'apikey':'58b70407-7431-4973-b889-35408646eae9',
        'Accept':'application/json'
      },
      method: 'GET'
    })
    return await result.json();
}

export {
  getStudies
}