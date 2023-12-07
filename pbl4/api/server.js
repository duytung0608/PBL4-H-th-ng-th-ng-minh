const http = require('http');

const COURES = [
    {
        id: 1,
        email: 'abc@gmail.com',
        password: '123',
    },
    {
        id: 2,
        email: 'bcd@gmail.com',
        password: '123',
    },
];
const server = http.createServer((req, res) => {
    res.setHeader('Content-type');
    res.statusCode = 404;
    res.end(
        JSON.stringify({
            success: false,
            error: 'NOT FAUND',
            data: COURES,
        })
    );
});
const PORT = 3000;
server.listen(PORT, () => console.log('Server running on port ${PORT}'));
