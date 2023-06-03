const URL = 'http://localhost:3500/employees';
const empl = {
    name: 'Sara',
    gender: 'female',
    salary: 10000,
    department: 'Development',
    birhYear: '2000',
};
fetch(URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(empl)
})
    .then((response) => response.json())
    .then((data) => console.log(data));
