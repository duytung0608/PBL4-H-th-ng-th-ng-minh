const express = require('express');
const app = express();
app.use(express.json());

const courses = [
    { id: 1, name: 'NodeJS' },
    { id: 2, name: 'ReactJS' },
    { id: 3, name: 'PHP' },
];

app.get('/', (req, res) => {
    res.send('Ban dang tham gia khoa hoc lap trinh NodeJS tai ZendVN');
});

app.get('/api/pbl4/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/pbl4/courses/:id', (req, res) => {
    const course = courses.find((courses) => courses.id === parseInt(req.params.id));
    if (!course) res.status(404).send('ID khong ton tai!!');
    res.send(course);
});

app.post('/api/pbl4/courses/add', (req, res) => {
    const course = {
        id: req.body.id,
        name: req.body.name,
    };
    courses.push(course);
    res.send(
        JSON.stringify({
            success: true,
            notice: 'ban da them thanh cong!!',
            data: courses,
        })
    );
});

app.put('/api/pbl4/courses/edit/:id', (req, res) => {
    const course = courses.find((courses) => courses.id === parseInt(req.params.id));
    course.name = req.body.name;
    res.send(
        JSON.stringify({
            success: true,
            notice: 'ban da cap nhat thanh cong!!',
            data: courses,
        })
    );
});

app.delete('/api/pbl4/courses/delete/:id', (req, res) => {
    const course = courses.find((courses) => courses.id === parseInt(req.params.id));
    let index = courses.indexOf(course);
    courses.splice(index, 1);
    res.send(
        JSON.stringify({
            success: true,
            notice: 'ban da xoa thanh cong!!',
            data: courses,
        })
    );
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server running on port ${PORT}'));

// const http = require('http');

// const COURES = [
//     { id: 1, name: 'NodeJS' },
//     { id: 2, name: 'ReactJS' },
// ];

// const server = http.createServer((req, res) => {
//     res.writeHead(404, {
//         'Content-type': 'application/json',
//         'X-Powered_By': 'Node.js',
//     });
//     res.end(
//         JSON.stringify({
//             success: false,
//             error: 'NOT FOUND',
//             data: null,
//         })
//     );
// });

// const PORT = 3000;
// server.listen(PORT, () => console.log('Server ruuning on port ${PORT}'));
