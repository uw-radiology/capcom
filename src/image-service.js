const getStudies = async () => {
  return await fetch('www.google.com', {
    headers: {
      'content-type': 'application/json'
    },
    method: 'GET'
  });
}

export {
  getStudies
}