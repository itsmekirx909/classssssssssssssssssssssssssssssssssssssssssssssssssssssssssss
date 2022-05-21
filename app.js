function btn1(){
    document.getElementById('para').style.backgroundColor = 'black'
    document.getElementById('para').style.color = 'white'

}
function btn2(){
    var color = prompt("Enter color")
    document.getElementById('para').style.backgroundColor = color
}
function btn3(){
    var textColor = prompt("Enter text color")
    document.getElementById('para').style.color = textColor
}

function img(){
    document.getElementById('pic').style.visibility = 'visible '
}
function img2(){
    document.getElementById('pic').style.visibility = 'hidden'
}