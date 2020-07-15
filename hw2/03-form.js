// Enter your code here
const frm = document.getElementById("form")
frm.onsubmit = function(e){
    e.preventDefault()
    var cb = document.getElementById('chckbox')
    if (cb.checked == true){
        val = "on";
    }
    else if(cb.checked == false){
        val = "off";
    }
   
    
    console.log(`name: ${form.inputName.value}`)
    console.log(`email: ${form.inputEmail.value}`)
    console.log(`comments: ${form.inputComment.value}`)
    console.log(`newsletter: ${val}`)
  }