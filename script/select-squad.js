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

        
        for(let i=0; i < 15; i++){


            
            if(isYourIndClicked || isOppoIndClicked){
                document.getElementById(`player-ind-${i}`).addEventListener("click", 
                    function(){
                        console.log(indianPlayer[i]);
                    }
                )
            }



            if(isYourSAClicked || isOppoSAClicked){
                document.getElementById(`player-sa-${i}`).addEventListener("click", 
                    function(){
                        console.log(southAfricanPlayer[i]);
                    }
                )
    
            }



            if(isYourAusClicked || isOppoAusClicked){
                document.getElementById(`player-aus-${i}`).addEventListener("click", 
                    function(){
                        console.log(australianPlayer[i]);
                    }
                )
            }



            if(isYourNZClicked || isOppoNZClicked){
                document.getElementById(`player-nz-${i}`).addEventListener("click", 
                    function(){
                        console.log(newZealandPlayer[i]);
                    }
                )
            }



            if(isYourPakClicked || isOppoPakClicked){
                document.getElementById(`player-pak-${i}`).addEventListener("click", 
                    function(){
                        console.log(pakistanPlayer[i]);
                    }
                )
            }



            if(isYourAfgClicked || isOppoAfgClicked){
                document.getElementById(`player-afg-${i}`).addEventListener("click", 
                    function(){
                        console.log(afghanPlayer[i]);
                    }
                )
            }



            if(isYourEngClicked || isOppoEngClicked){
                document.getElementById(`player-eng-${i}`).addEventListener("click", 
                    function(){
                        console.log(englandPlayer[i]);
                    }
                )
            }



            if(isYourBanClicked || isOppoBanClicked){
                document.getElementById(`player-ban-${i}`).addEventListener("click", 
                    function(){
                        console.log(bangladeshPlayer[i]);
                    }
                )
            }
        }
    }
)










