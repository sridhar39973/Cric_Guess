import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

let players = [
    { "name": "Virat Kohli", "country": "India" },
    { "name": "Kane Williamson", "country": "New Zealand" },
    { "name": "Steve Smith", "country": "Australia" },
    { "name": "Joe Root", "country": "England" },
    { "name": "Kagiso Rabada", "country": "South Africa" },
    { "name": "Rohit Sharma", "country": "India" },
    { "name": "Quinton de Kock", "country": "South Africa" },
    { "name": "David Warner", "country": "Australia" },
    { "name": "Jason Holder", "country": "West Indies" },
    { "name": "Kraigg Brathwaite", "country": "West Indies" },
    { "name": "Babar Azam", "country": "Pakistan" },
    { "name": "Kusal Perera", "country": "Sri Lanka" },
    { "name": "Ross Taylor", "country": "New Zealand" },
    { "name": "Dimuth Karunaratne", "country": "Sri Lanka" },
    { "name": "Brendon McCullum", "country": "New Zealand" },
    { "name": "Faf du Plessis", "country": "South Africa" },
    { "name": "Mohammad Amir", "country": "Pakistan" },
    { "name": "Shakib Al Hasan", "country": "Bangladesh" },
    { "name": "Mushfiqur Rahim", "country": "Bangladesh" },
    { "name": "Shai Hope", "country": "West Indies" },
    { "name": "Tamim Iqbal", "country": "Bangladesh" },
    { "name": "Marnus Labuschagne", "country": "Australia" },
    { "name": "Angelo Mathews", "country": "Sri Lanka" },
    { "name": "Rishabh Pant", "country": "India" },
    { "name": "Tom Latham", "country": "New Zealand" },
    { "name": "Ben Stokes", "country": "England" },
    { "name": "Ajinkya Rahane", "country": "India" },
    { "name": "Pat Cummins", "country": "Australia" },
    { "name": "Josh Hazlewood", "country": "Australia" },
    { "name": "Ravichandran Ashwin", "country": "India" },
    { "name": "Tim Southee", "country": "New Zealand" },
    { "name": "Kane Richardson", "country": "Australia" },
    { "name": "Mitchell Starc", "country": "Australia" },
    { "name": "Moeen Ali", "country": "England" },
    { "name": "Eoin Morgan", "country": "England" },
    { "name": "Chris Woakes", "country": "England" },
    { "name": "Trent Boult", "country": "New Zealand" },
    { "name": "Adam Zampa", "country": "Australia" },
    { "name": "Jofra Archer", "country": "England" },
    { "name": "Rashid Khan", "country": "Afghanistan" },
    { "name": "Mohammad Nabi", "country": "Afghanistan" },
    { "name": "Rohit Sharma", "country": "India" },
    { "name": "Virat Kohli", "country": "India" },
    { "name": "Kane Williamson", "country": "New Zealand" },
    { "name": "Steve Smith", "country": "Australia" },
    { "name": "Joe Root", "country": "England" },
    { "name": "Kagiso Rabada", "country": "South Africa" },
    { "name": "Quinton de Kock", "country": "South Africa" },
    { "name": "David Warner", "country": "Australia" },
    { "name": "Jason Holder", "country": "West Indies" },
    { "name": "Kraigg Brathwaite", "country": "West Indies" },
    { "name": "Babar Azam", "country": "Pakistan" },
    { "name": "Kusal Perera", "country": "Sri Lanka" },
    { "name": "Ross Taylor", "country": "New Zealand" },
    { "name": "Dimuth Karunaratne", "country": "Sri Lanka" },
    { "name": "Brendon McCullum", "country": "New Zealand" },
    { "name": "Faf du Plessis", "country": "South Africa" },
    { "name": "Mohammad Amir", "country": "Pakistan" },
    { "name": "Shakib Al Hasan", "country": "Bangladesh" },
    { "name": "Mushfiqur Rahim", "country": "Bangladesh" },
    { "name": "Shai Hope", "country": "West Indies" },
    { "name": "Tamim Iqbal", "country": "Bangladesh" },
    { "name": "Marnus Labuschagne", "country": "Australia" },
    { "name": "Angelo Mathews", "country": "Sri Lanka" },
    { "name": "Rishabh Pant", "country": "India" },
    { "name": "Tom Latham", "country": "New Zealand" },
    { "name": "Ben Stokes", "country": "England" },
    { "name": "Ajinkya Rahane", "country": "India" },
    { "name": "Pat Cummins", "country": "Australia" },
    { "name": "Josh Hazlewood", "country": "Australia" },
    { "name": "Ravichandran Ashwin", "country": "India" },
    { "name": "Tim Southee", "country": "New Zealand" },
    { "name": "Kane Richardson", "country": "Australia" },
    { "name": "Mitchell Starc", "country": "Australia" },
    { "name": "Moeen Ali", "country": "England" },
    { "name": "Eoin Morgan", "country": "England" },
    { "name": "Chris Woakes", "country": "England" },
    { "name": "Trent Boult", "country": "New Zealand" },
    { "name": "Adam Zampa", "country": "Australia" },
    { "name": "Jofra Archer", "country": "England" },
    { "name": "Rashid Khan", "country": "Afghanistan" },
    { "name": "Mohammad Nabi", "country": "Afghanistan" }
  ]
  
let currentPlayer = {};
let totalcount = 0;

// Fetch players from the database and start the server
    

app.get("/", function (req, res) {
    totalcount = 0;
    nextPlayer();
    res.render("index.ejs", { player: currentPlayer, totalScore: totalcount });
});

app.post("/submit", function (req, res) {
    const nation_name = req.body.nation_name.trim();
    let is_Correct = false;
    if (nation_name.toLowerCase() === currentPlayer.country.toLowerCase()) {
        console.log("correct");
        totalcount++;
        is_Correct = true;
    }
    nextPlayer();
    res.render("index.ejs", {
        player: currentPlayer,
        totalScore: totalcount,
        wasCorrect: is_Correct
    });
});

function nextPlayer() {
    const randomPlayer = players[Math.floor(Math.random() * players.length)];
    currentPlayer = randomPlayer;
}
app.listen(port, function () {
    console.log(`Server is running on http://localhost:${port}`);
});
