// Enter your code here
function getSize(){
    // Get width and height of the window excluding scrollbars
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;

    document.getElementById('scrnwdth').innerHTML = w;
    document.getElementById('scrnhght').innerHTML = h;

}

