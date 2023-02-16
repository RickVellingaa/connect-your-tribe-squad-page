import express from 'express'

// API met bijna alle studenten
const url = 'https://whois.fdnd.nl/api/v1/members?first=200'
const data = await fetch(url)
  .then((response) => response.json())
  .catch((error) => error)

// API met alle studenten van Squad A
const urlA = 'https://whois.fdnd.nl/api/v1/squad/squad-a-2022'
const dataA = await fetch(urlA)
  .then((response) => response.json())
  .catch((error) => error)

// API met alle studenten van Squad B
const urlB= 'https://whois.fdnd.nl/api/v1/squad/squad-b-2022'
const dataB = await fetch(urlB)
  .then((response) => response.json())
  .catch((error) => error)

// API met alle studenten van Squat C
const urlC = 'https://whois.fdnd.nl/api/v1/squad/squat-c-2022'
const dataC = await fetch(urlC)
  .then((response) => response.json())
  .catch((error) => error)

// API met random studenten
const urlRandom = 'https://whois.fdnd.nl/api/v1/members?orderBy=name'
const dataRandom = await fetch(urlRandom)
  .then((response) => response.json())
  .catch((error) => error)

// Maak een nieuwe express app
const app = express()


// Stel in hoe we express gebruiken
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


// Maak een route voor de index
app.get('/', (request, response) => {
    response.render('index', data)
})

// Maak een route voor de members
app.get('/members', (request, response) => {

  let id = request.query.member || 'cldemsxee3oeg0avw60bcsibn'
  let memberUrl = 'https://whois.fdnd.nl/api/v1/member?id=' + id
  
  fetchJson(memberUrl).then((data) => {
    // console.log(data)
    if (!data.member.gitHubHandle.startsWith('https://www.github.com/')) {
      data.member.gitHubHandle = 'https://www.github.com/' + data.member.gitHubHandle;
    }
    response.render('member', data)
  })

})


// Maak een route voor de members
app.get('/about', (request, response) => {
  response.render('about')
})


// app.get('/members', (request, response) => {
//   response.send('Joepie!!')
// })

// Stel het poortnummer in en start express
app.set('port', process.env.PORT || 1000)
app.listen(app.get('port'), function () {
  console.log(`Application started on http://localhost:${app.get('port')}`)
})

/**
 * Wraps the fetch api and returns the response body parsed through json
 * @param {*} url the api endpoint to address
 * @returns the json response from the api endpoint
 */
async function fetchJson(url) {
  return await fetch(url)
    .then((response) => response.json())
    .catch((error) => error)
}