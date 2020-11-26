const express = require('express');
const app = express();
const port = 5000;

app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, firstName: 'Vedran', lastName: 'Novak'},
        {id: 1, firstName: 'Alo', lastName: 'Marty'},
        {id: 1, firstName: 'Mickey', lastName: 'Den'}
    ];

    res.json(customers);
});

app.listen(port, () => console.log(`Server started on port ${port}`));