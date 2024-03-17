import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//     res.send('Hello! Yazdani');
// });

// Write standard method for API request i.e. follow the standard method for writing URL
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id:1,
            title: 'A joke',
            content: 'This is a joke'
        },
        {
            id:2,
            title: 'Another joke',
            content: 'This is another joke'
        },
        {
            id:3,
            title: 'A  third joke',
            content: 'This is a third joke'
        },
        {
            id:4,
            title: 'A fourth joke',
            content: 'This is a fourth joke'
        },
        {
            id:5,
            title: 'A fifth joke',
            content: 'This is a fifth joke'
        }
    ]
    res.send(jokes);
});

app.listen(port, () => {
    console.log(`Server is running on https://localhost:${port}`);
});