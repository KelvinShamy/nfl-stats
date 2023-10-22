const express = require("express");
const app = express();

const PORT = 3001;

app.get('/teams', async (req, res) => {
    console.log("req.query:", req.query);
    try {
        const year = !req.query?.year ? '2023' : req.query.year;
        const url = 'https://nfl-team-stats1.p.rapidapi.com/teamStats';
        const options = {
            method: 'GET',
            params: {leagueYear: year},
            headers: {
              'X-RapidAPI-Key': 'e18aa043aemshbc565bdf5dcea0ep1fda2fjsn0b03c678883d',
              'X-RapidAPI-Host': 'nfl-team-stats1.p.rapidapi.com'
            }
          };
        const response = await fetch(url, options);
        const data = await response.json();
        console.log('data.stats:', data.stats);
        res.status(200).send(data.stats);
    } catch (err) {
        console.error('FETCH ERROR:', err);
    };
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('UNKNOWN ERROR');
  });

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
