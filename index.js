const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// a GET api that returns query param, path param and return both values with info as json
app.get('/user/:id', (req, res) => {
    const pathParam = req.params.id; 
    const queryParam = req.query.name;

    res.json({
        message: 'Successfully fetched data',
        pathParam: pathParam,
        queryParam: queryParam || 'No query parameter provided'
    });
});

// a POST api which acccepts a JSON data. Return an array of data.

app.post('/user/data', (req, res) => {
    const receivedData = req.body;

    if (!receivedData || Object.keys(receivedData).length === 0) {
        return res.status(400).json({ error: 'No data received' });
    }

    res.json({
        message: 'Data received successfully',
        data: receivedData
    });
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});