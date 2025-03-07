document.getElementById('match-team').style.display = 'none';
document.getElementById('match-squad').style.display = 'none';
document.getElementById('match-table').style.display = 'none';
document.getElementById('match-result').style.display = 'none';
document.getElementById('select-squad-div').style.display = 'none';


//Color change of the start button
const letter = '0123456789ABCDEF';
let colorCode = '#';
let textColor = '#';
for(let i=1; i<=6; i++){
    let randomNumber = Math.floor(Math.random() * 16);
    let randomText = Math.abs(randomNumber - 15);
    colorCode += letter[randomNumber];
    textColor += letter[randomText];
}

let start = document.getElementById('start');
start.style.backgroundColor = colorCode;
start.style.borderColor = colorCode;
start.style.color = textColor;

start.addEventListener("mouseenter", 
    function(){
        start.style.backgroundColor = textColor;
        start.style.borderColor = textColor;
        start.style.color = colorCode;
    })

start.addEventListener("mouseleave",  
    function(){
        start.style.backgroundColor = colorCode;
        start.style.borderColor = colorCode;
        start.style.color = textColor;
    })


document.getElementById('start').addEventListener("click", 
    function(){
        document.getElementById('match-team').style.display = 'grid';
        document.getElementById('oppo-match-team').style.display = 'none';
        document.getElementById('start-the-match').style.display = 'none';
        document.getElementById('team-name').style.display = 'none';
    }) 


//Color change of select squad button
let selectSquad = document.getElementById('select-squad');
selectSquad.style.backgroundColor = colorCode;
selectSquad.style.borderColor = colorCode;
selectSquad.style.color = textColor;

selectSquad.addEventListener("mouseenter", 
    function(){
        selectSquad.style.backgroundColor = textColor;
        selectSquad.style.borderColor = textColor;
        selectSquad.style.color = colorCode;
    })

selectSquad.addEventListener("mouseleave",  
    function(){
        selectSquad.style.backgroundColor = colorCode;
        selectSquad.style.borderColor = colorCode;
        selectSquad.style.color = textColor;
    })


