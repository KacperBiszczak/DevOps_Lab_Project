const express = require('express');
const app = express();

// Endpoint 1: Główna strona
app.get('/', (req, res) => {
    res.status(200).send('Aplikacja działa!!!');
});

// Endpoint 2: Lista produktów
app.get('/products', (req, res) => {
    res.status(200).json([
        { id: 1, name: 'Jabłko' },
        { id: 2, name: 'Gruszka' },
        { id: 3, name: 'Pietruszka' }
    ]);
});

module.exports = app;

if (require.main === module) {
    app.listen(3000, () => console.log('Port: 3000'));
}