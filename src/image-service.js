const getImage = async () => {
  const studies = await api_query('https://hackathon.siim.org/dicomweb/studies/','application/json')
  	var n = 0 //random
  	var json_result = await studies.json();
  	var study = json_result[n]["0020000D"].Value[0];

  	var instance_url = "https://hackathon.siim.org/dicom-web/studies/".concat(study.concat("/instances"));
  	const instances = await api_query(instance_url,'application/json');
  	json_result = await instances.json();
  	n = 0 //random
  	var instance = json_result[n]["00080018"].Value[0];

  	var wado_uri = "https://hackathon.siim.org/wadouri/?requestType=WADO&objectUID=".concat(instance);

  	const wado = await api_query(wado_uri,'image/jpeg')
  	console.log(wado);
    return wado_uri;
}

function api_query (url, accept){
	return fetch(url, {
      headers: {
        'apikey':'58b70407-7431-4973-b889-35408646eae9',
        'Accept':accept
      },
      method: 'GET'
    })

}

export {
  getImage
}

