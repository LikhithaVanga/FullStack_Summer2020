const url = 'https://restcountries.eu/rest/v2/all';

let xhr = new XMLHttpRequest();
xhr.open('GET', url, true);
xhr.responseType = 'json';
xhr.send();
xhr.onload = () => {
if (xhr.status === 200) {
console.log(xhr.response);
for(i = 0; i < 249; i++){
    console.log(xhr.response[i].name+"-"+xhr.response[i].population);
    const ol = document.querySelector('ol')
    const li = document.createElement('li')
    ol.append(li)
    let populationNumber = xhr.response[i].population;
    let stringPOp = populationNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    li.innerHTML = xhr.response[i].name+"-"+stringPOp;
}

}
else {
console.log(`Status Code: ${xhr.status} - ${xhr.statusText}`);
}
};
