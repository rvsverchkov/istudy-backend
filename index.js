const express = require('express');

const { PORT = 3000 } = process.env;

const app = express();

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
})

app.get('/', (req, res) => {
    res.send(
        `
        <html>
            <body>
                <h1>Hello world</h1>
            </body>
        </html>
        `
    )
})