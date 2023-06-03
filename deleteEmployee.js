const URL = 'http://localhost:3500/employees/126';

fetch(URL, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },   
})
    .then((response) => response.json())
    .then((data) => console.log(data));
