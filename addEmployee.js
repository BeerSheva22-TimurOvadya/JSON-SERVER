const URL = 'http://localhost:3500/employees';
const empl = {
    name: 'Sara',
    gender: 'female',
    salary: 10000,
    department: 'Development',
    birhYear: '2000',
    userId: 'admin'
};

fetch(URL, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlbHJhbi1hZG1pbkBjby5pbCIsImlhdCI6MTY4Nzk1Njc4NiwiZXhwIjoxNjg3OTYwMzg2LCJzdWIiOiJhZG1pbiJ9.KpxEvOIGk2L4CUqE69CVMLwYmWraizhlxoC34L5sh-I',
    },
    body: JSON.stringify(empl),
})
    .then((response) => response.json())
    .then((data) => console.log(data));
