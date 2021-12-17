const express = require('express');
const path = require('path');
const fs = require('fs');
const uuid = require('./helpers/uuid');
let notes = require('./db/notes.json');

const PORT = process.env.PORT || 3002;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('/api/notes', (req, res) => {
  console.info(`${req.method} request received for note`);

  fs.readFile('./db/db.json', (err, data) => {
    if (err) console.error(err);
    else res.json(JSON.parse(data));
  })
    
});

app.post('/api/notes', (req, res) => {
  console.info(`${req.method} request received to submit a note`);

  const { title, text } = req.body;

  if (title && text) {
    const newNote = {
      title,
      text,
      id: uuid(),
    };

    notes.push(newNote)

    fs.writeFile('./db/db.json', JSON.stringify(notes, null, 3), (err) => err ? console.error(err) : console.info(`\nData written to db.json`))

    const response = {
      status: 'success',
      body: newNote,
    };

    res.json(response);
  } else {
    res.json('Error in posting note');
  }
});

app.delete('/api/notes/:id', (req, res) => {
  console.info(`${req.method} request received to delete a note`);
  const deleteId = req.params.id;
  notes = notes.filter(note => note.id !== deleteId)

  fs.writeFile('./db/db.json', JSON.stringify(notes, null, 3), (err) => err ? console.error(err) : console.info(`\nData written to db.json`))
  res.JSON(notes);
}) 

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);