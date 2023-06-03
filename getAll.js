const URL = 'http://localhost:3500/employees'
fetch(URL).then(response => response.json()).then(data => console.log(data))