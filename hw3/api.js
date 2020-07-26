const http = require('http');
const port = 5000 || process.env.PORT;
//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var axios = require('axios');


let url = 'https://restcountries.eu/rest/v2/all';
axios
.get(url)
.then(response => {
console.log('Request successful', response);
console.log('Data', response.data);
for(i=0; i<249;i++){
    //console.log(response.data[i].name)
}
})
.catch(error => {
console.log('Request failed', error);
});

const server = http.createServer((req, res) => {
  // main route
  if (req.url === '/') {
    console.log(`${req.method} - ${req.url}`);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Hello');
    res.end();
  }
  // main route
  else if (req.url === '/main') {
    console.log(`${req.method} - ${req.url}`);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    axios
    .get(url)
    .then(response => {
    //console.log('Request successful', response);
    //console.log('Data', response.data);
    for(i=0; i<249;i++){
        //console.log(response.data[i].name +'-'+response.data[i].capital+'\n')

        res.write(response.data[i].name +' -- '+response.data[i].capital+'<br/>');
        res.write('\n');
        
    }
        res.end();
    })
    .catch(error => {
    console.log('Request failed', error);
    });
  }
  // new route --> /populous
  else if (req.url === '/populous') {
    console.log(`${req.method} - ${req.url}`);
    res.writeHead(200, { 'Content-Type': 'text/html' });

    axios
    .get(url)
    .then(response => {
    //console.log('Request successful', response);
    //console.log('Data', response.data);
    for(i=0; i<249;i++){
        //console.log(response.data[i].name +'-'+response.data[i].capital+'\n')
        if(response.data[i].population > 20000000)
        res.write(response.data[i].name +' -- '+response.data[i].population+'<br/>');
        res.write('\n');
        
    }
        res.end();
    })
    .catch(error => {
    console.log('Request failed', error);
    });
  }
  // new route --> /regions
  else if (req.url === '/regions') {
    console.log(`${req.method} - ${req.url}`);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    axios
    .get(url)
    .then(response => {
    //console.log('Request successful', response);
    //console.log('Data', response.data);
    
    var countafrica = 0;
    var countamericas = 0;
    var countasia =0;
    var counteurope =0;
    var countoceania =0;
    for(i=0; i<=249;i++){
        //console.log(response.data[i].name +'-'+response.data[i].capital+'\n')
        if(response.data[i].region === 'Africa'){
            countafrica++;
        }
        
        if(response.data[i].region === 'Americas'){
            countamericas++;
        }
        if(response.data[i].region === 'Asia'){
            countasia++;
        }
        if(response.data[i].region === 'Europe'){
            counteurope++;
        }
        if(response.data[i].region === 'Oceania'){
            countoceania++;
        }

    }
        res.write('Africa-' +countafrica );
        res.write('\n');
        res.write('Americas-' +countamericas);
        res.write('\n');
        res.write('Asia-' +countasia);
        res.write('\n');
        res.write('Europe-' +counteurope);
        res.write('\n');
        res.write('Oceania-' +countoceania);
        res.end();
    })
    .catch(error => {
    console.log('Request failed', error);
    });
  }
  // new route --> handle 404
  else {
    console.log(`${req.method} - ${req.url}`);
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('<h1>404: Page not found</h1>');
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});