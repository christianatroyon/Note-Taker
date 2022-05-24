// Modules
const router = require("express").Router();
const path = require("path");

// GET Route for api
router.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

router.get('/notes', (req, res) => {
    readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
});


router.post('/notes', (req, res) => {
    fs.readFile("./db/db.json", "utf8", function (err, data) {
        let newData = JSON.parse(data);
        newData.push(req.body);
        fs.writeFile("./db/notes.json"), JSON.stringify(newData)
    })
    });
    
module.exports = router;