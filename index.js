// Importeer express uit de node_modules map
import express from 'express'

// API met bijna alle studenten
const url = 'https://whois.fdnd.nl/api/v1/members?first=200'
const data = await fetch(url)
  .then((response) => response.json())
  .catch((error) => error)

console.log(data)

// API met alle studenten van Squad A
const urlA = 'https://whois.fdnd.nl/api/v1/squad/squad-a-2022'
const dataA = await fetch(urlA)
  .then((response) => response.json())
  .catch((error) => error)

console.log(dataA)

// API met alle studenten van Squad B
const urlB= 'https://whois.fdnd.nl/api/v1/squad/squad-b-2022'
const dataB = await fetch(urlB)
  .then((response) => response.json())
  .catch((error) => error)

console.log(dataB)

// API met alle studenten van Squat C
const urlC = 'https://whois.fdnd.nl/api/v1/squad/squat-c-2022'
const dataC = await fetch(urlC)
  .then((response) => response.json())
  .catch((error) => error)

console.log(dataC)

// API met random studenten
const urlRandom = 'https://whois.fdnd.nl/api/v1/members?orderBy=name'
const dataRandom = await fetch(urlRandom)
  .then((response) => response.json())
  .catch((error) => error)

console.log(dataRandom)


// Maak een nieuwe express app aan
const app = express()

// Stel ejs in als template engine en geef de 'views' map door
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('public'))

// Maak een route voor de index
app.get('/', function (req, res) {
  res.render('index', dataRandom)
})

app.get('/squadA', function (req, res) {
  res.render('squadA', dataA)
})

app.get('/squadB', function (req, res) {
  res.render('squadB', dataB)
})

app.get('/squatC', function (req, res) {
  res.render('squatC', dataC)
})

app.get('/liked', function (req, res) {
  res.render('liked')
})

app.get('/rest', function (req, res) {
  res.render('rest')
})

app.get('/tribe', function (req, res) {
  res.render('tribe', data)
})


// Stel het poortnummer in waar express op gaat luisteren
app.set('port', process.env.PORT || 8000)

// Start express op, haal het ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})