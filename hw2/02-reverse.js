// Enter your code here
function reverse(){
    var n = document.getElementById('input').value;
    nstr = n.toString();
    console.log(nstr.length);
    if(nstr.length!=8){
        alert("length of number is not 8");
    }
    else{
        numrev = n.split("").reverse().join("");
        //$.prompt(numrev);
        alert(numrev);

}

}

    
    
    

