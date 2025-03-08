let pakistanPlayer2 = [];
let newZealandPlayer2 = [];

document.getElementById('select-squad').addEventListener("click", 
    function(){
        document.getElementById('match-table').style.display = 'flex';
        document.getElementById('squad-selected-your').style.display = 'flex';
        document.getElementById('squad-selected-oppo').style.display = 'flex';
        document.getElementById('match-team').style.display = 'none';
        
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
                        newZealandPlayer2.push(newZealandPlayer[i]);
                        console.log(newZealandPlayer2);
                    }
                )
            }



            if(isYourPakClicked || isOppoPakClicked){
                document.getElementById(`player-pak-${i}`).addEventListener("click", 
                    function(){
                        console.log(pakistanPlayer[i]);
                        pakistanPlayer2.push(pakistanPlayer[i]);
                        console.log(pakistanPlayer2);
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




        // let yourTeamTable = document.getElementsByClassName('your-team-table-header');
        // console.log(yourTeamTable);

        let yourTeamTableBody = document.getElementById('your-team-table-body');
        let yourTeamTableElement;
        let yourTeamTableRow = [];
        for(let i = 0; i < 11; i++){
            yourTeamTableElement = document.createElement('tr');
            yourTeamTableElement.id = `your-team-table-element-${i}`;
            yourTeamTableElement.innerHTML =`
                                                <td class="cursor-pointer" id="name-of-your-player">
                                                </td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
            `
            yourTeamTableBody.appendChild(yourTeamTableElement);
            yourTeamTableRow.push(yourTeamTableElement.children);
        }



        let oppoTeamTableBody = document.getElementById('oppo-team-table-body');
        let oppoTeamTableElement;
        let oppoTeamTableRow = [];
        for(let i = 0; i < 11; i++){
            oppoTeamTableElement = document.createElement('tr');
            oppoTeamTableElement.id = `oppo-team-table-element-${i}`;
            oppoTeamTableElement.innerHTML =`
                                                <td class="cursor-pointer" id="name-of-oppo-player">
                                                </td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
            `
            oppoTeamTableBody.appendChild(oppoTeamTableElement);
            oppoTeamTableRow.push(oppoTeamTableElement.children);
        }
        

        if(isYourPakClicked){
            for(let i = 0; i < 11; i++){
                document.getElementById('squad-selected-your').addEventListener("click", 
                    function(){
                        document.getElementById(`your-team-table-element-${i}`).children[0].innerHTML = pakistanPlayer2[i];
                        document.getElementById('squad-selected-your').style.display = 'none';
                        document.getElementById('your-squad-array').innerHTML = [...pakistanPlayer2];
                        document.getElementById('your-squad').style.display = 'none';
                    }
                )
            }
        }


        if(isOppoNZClicked){
            for(let i = 0; i < 11; i++){
                document.getElementById('squad-selected-oppo').addEventListener("click", 
                    function(){
                        document.getElementById(`oppo-team-table-element-${i}`).children[0].innerHTML = newZealandPlayer2[i];
                        document.getElementById('squad-selected-oppo').style.display = 'none';
                        document.getElementById('oppo-squad-array').innerHTML = [...newZealandPlayer2];
                        document.getElementById('oppo-squad').style.display = 'none';
                    }
                )
            }
        }
    }
)













