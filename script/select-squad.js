        


document.getElementById('select-squad').addEventListener("click", 
    function(){
        document.getElementById('match-table').style.display = 'flex';
        if(isYourIndClicked || isOppoIndClicked){
            console.log(indianPlayer);
        }
        if(isYourSAClicked || isOppoSAClicked){
            console.log(southAfricanPlayer);
        }
        if(isYourAusClicked || isOppoAusClicked){
            console.log(australianPlayer);
        }
        if(isYourNZClicked || isOppoNZClicked){
            console.log(newZealandPlayer);
        }
        if(isYourPakClicked || isOppoPakClicked){
            console.log(pakistanPlayer);
        }
        if(isYourAfgClicked || isOppoAfgClicked){
            console.log(afghanPlayer);
        }
        if(isYourEngClicked || isOppoEngClicked){
            console.log(englandPlayer);
        }
        if(isYourBanClicked || isOppoBanClicked){
            console.log(bangladeshPlayer);
        }
    }
)







