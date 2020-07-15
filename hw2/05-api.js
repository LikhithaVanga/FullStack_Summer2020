const url = 'https://restcountries.eu/rest/v2/all';
fetch(url)
.then(response=> {
    
    myData = response.json();
    console.log(myData.length);
    })
.then((data) => console.log(data))
.catch((error) => console.log(error));


