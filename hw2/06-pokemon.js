

// Enter your code here
for(i = 1; i < 499; i++){
    const url = 'https://pokeapi.co/api/v2/pokemon/'+i+'/';
    let getDataAsync = async (url) => {
        try {
        let response = await fetch(url);
        let data = await response.json();
        console.log('Data', data);
        console.log(data.species.name);
        const div = document.querySelector('div')
        const span = document.createElement('span')
        div.append(span);
        span.innerHTML = data.species.name+ " - ";
        span.style = "text-transform:capitalize;"
        }
        catch(error){
        console.log('Request failed', error);
        }
        };
        getDataAsync(url);
    }
