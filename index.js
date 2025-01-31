import express from 'express'


// Haalt de API gegevens op
const url = 'https://whois.fdnd.nl/api/v1/members?first=200'
//  Haalt alle data op en wacht voordat voorgaande functions worden uitgevoerd
const data = await fetch(url)
  .then((response) => response.json())
  .catch((error) => error)

// Haalt de API gegevens op
const urlA = 'https://whois.fdnd.nl/api/v1/squad/squad-a-2022'
//  Haalt alle data op en wacht voordat voorgaande functions worden uitgevoer
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

 // API met random studenten
const urlMinor= 'https://whois.fdnd.nl/api/v1/squad/minor-web-2023'
const dataMinor = await fetch(urlMinor)
  .then((response) => response.json())
  .catch((error) => error) 

// Maak een nieuwe express app
const app = express()

// Stel in hoe we express gebruiken
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('public'))

// Maak een route voor de index
app.get('/home', function (req, res) {

  let squadUrl = urlRandom + '&direction=ASC'
  fetchJson(squadUrl).then((dataRandom) => {
    res.render('index', dataRandom)
  })
})

// Maakt een route voor de squad A pagina
app.get('/squadA', function (req, res) {

  let slug = req.query.squad || 'squad-a-2022'
  let orderBy = req.query.orderBy || 'name' + '&direction=ASC'
  let squadUrl = urlA + '?orderBy=' + orderBy + '&direction=ASC'

  fetchJson(squadUrl).then((dataA) => {
    res.render('squadA', dataA)
  })
})

// Maakt een route voor de squad B pagina
app.get('/squadB', function (req, res) {

  let slug = req.query.squad || 'squad-a-2022'
  let orderBy = req.query.orderBy || 'name' + '&direction=ASC'
  let squadUrl = urlB + '?orderBy=' + orderBy + '&direction=ASC'

  fetchJson(squadUrl).then((dataB) => {
    res.render('squadB', dataB)
  })
})

// Maakt een route voor de squat C pagina
app.get('/squatC', function (req, res) {

  let slug = req.query.squad || 'squad-a-2022'
  let orderBy = req.query.orderBy || 'name' + '&direction=ASC'
  let squadUrl = urlC + '?orderBy=' + orderBy + '&direction=ASC'

  fetchJson(squadUrl).then((dataC) => {
    res.render('squatC', dataC)
  })
})

// Maakt een route voor de liked pagina
app.get('/liked', function (req, res) {
  res.render('liked')
})

// Maakt een route voor de overige pagina
app.get('/rest', function (req, res) {
  res.render('rest', dataMinor)
})

// Maakt een route voor de tribe pagina
app.get('/tribe', function (req, res) {

  let orderBy = req.query.orderBy || 'name' + '&direction=ASC'
  let squadUrl = url + '?&orderBy=' + orderBy + '&direction=ASC'

  fetchJson(squadUrl).then((data) => {
    res.render('tribe', data)
  })
})


// Maak een route voor de index
app.get('/', (request, response) => {
    response.render('index', data)
});

// Maak een route voor de members
app.get('/members', (request, response) => {

  let id = request.query.member || 'cldeo1dg33rqf0bw5jh4jpuk2'
  let memberUrl = 'https://whois.fdnd.nl/api/v1/member?id=' + id
  
  fetchJson(memberUrl).then((data) => {
    // console.log(data)
    if (!data.member.gitHubHandle.startsWith('https://www.github.com/')) {
      data.member.gitHubHandle = 'https://www.github.com/' + data.member.gitHubHandle;
    }
    response.render('member', data)
  })

})


// Maak een route voor de about pagina
app.get('/about', (request, response) => {
  response.render('about')
})

// Stel het poortnummer in en start express
app.set('port', process.env.PORT || 1000)
app.listen(app.get('port'), function () {
  console.log(`Application started on http://localhost:${app.get('port')}`)
})

async function fetchJson(url) {
  return await fetch(url)
    .then((response) => response.json())
    .catch((error) => error)
}