const URL = 'http://localhost:3500/employees/127';
const empl = {
    name: 'Vova',
    gender: 'male',
    salary: 20000,
    department: 'Audit',
    birhYear: '2000',
};
fetch(URL, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(empl),
})
    .then((response) => response.json())
    .then((data) => console.log(data));
