let indianPlayer = [];
let southAfricanPlayer = [];
let australianPlayer = [];
let newZealandPlayer = [];
let pakistanPlayer = [];
let afghanPlayer = [];
let englandPlayer = [];
let bangladeshPlayer = [];    


let isYourIndClicked = false;
let isYourSAClicked = false;
let isYourAusClicked = false;
let isYourNZClicked = false;
let isYourPakClicked = false;
let isYourAfgClicked = false;
let isYourEngClicked = false;
let isYourBanClicked = false;
let isOppoIndClicked = false;
let isOppoSAClicked = false;
let isOppoAusClicked = false;
let isOppoNZClicked = false;
let isOppoPakClicked = false;
let isOppoAfgClicked = false;
let isOppoEngClicked = false;
let isOppoBanClicked = false;
//selecting your squad
let yourTeam = '#';

document.getElementById('your-ind').addEventListener("click", 
    function(){
        isYourIndClicked = true;
        document.getElementById('match-squad').style.display = 'grid';
        let ind = document.getElementsByClassName('player-name-ind');
        for(let i=0; i < ind.length; i++){
            indianPlayer.push(ind[i].innerHTML);
        }
        let yourSquad = document.getElementById('your-squad');
        yourSquad.style.backgroundColor = '#35CAFE'; 
        yourSquad.innerHTML = 'India';

        let squad = document.createElement('ul');
        squad.className = "bg-white text-black text-xl font-normal p-3 my-3 rounded-xl border border-[#35CAFE] flex flex-col gap-2";
        squad.id = "player-name-ind";
        for (let i = 0; i < ind.length; i++) {
            let player = document.createElement('li');
            player.className = "player-name-ind border border-[#35CAFE] cursor-pointer rounded-xl px-5 py-2 hover:bg-[#35CAFE] hover:text-white";
            player.id = `player-ind-${i}`;
            player.innerHTML = ind[i].innerHTML; // Set the player's name



            squad.appendChild(player); // Append <li> to <ul>
        }

        yourSquad.appendChild(squad);
        console.log(yourSquad);

        
        yourTeam = 'India';
        document.getElementById('oppo-match-team').style.display = 'flex';
        });    


document.getElementById('your-sa').addEventListener("click", 
    function(){
        isYourSAClicked = true;
        document.getElementById('match-squad').style.display = 'grid';
        let sa = document.getElementsByClassName('player-name-sa');
        for(let i=0; i < sa.length; i++){
            southAfricanPlayer.push(sa[i].innerHTML);
        }
        console.log(sa[0].innerHTML);
        let yourSquad = document.getElementById('your-squad');
        yourSquad.style.backgroundColor = '#38761d'; 
        yourSquad.innerHTML = 'South Africa';

        let squad = document.createElement('ul');
        squad.className = "bg-white text-black text-xl font-normal p-3 my-3 rounded-xl border border-[#38761d] flex flex-col gap-2";
        squad.id = "player-name-sa";
        for (let i = 0; i < sa.length; i++) {
            let player = document.createElement('li');
            player.className = "player-name-sa border border-[#38761d] cursor-pointer rounded-xl px-5 py-2 hover:bg-[#38761d] hover:text-white";
            player.id = `player-sa-${i}`;
            player.innerHTML = sa[i].innerHTML;


            squad.appendChild(player); // Append <li> to <ul>
        }

        yourSquad.appendChild(squad);
        console.log(yourSquad);

        
        yourTeam = 'South Africa';
        document.getElementById('oppo-match-team').style.display = 'flex';
        });    



document.getElementById('your-aus').addEventListener("click", 
    function(){
        isYourAusClicked = true;
        document.getElementById('match-squad').style.display = 'grid';
        let aus = document.getElementsByClassName('player-name-aus');
        for(let i=0; i < aus.length; i++){
            australianPlayer.push(aus[i].innerHTML);
        }
        console.log(aus[0].innerHTML);
        let yourSquad = document.getElementById('your-squad');
        yourSquad.style.backgroundColor = '#FFCD00'; 
        yourSquad.innerHTML = 'Australia';

        let squad = document.createElement('ul');
        squad.className = "bg-white text-black text-xl font-normal p-3 my-3 rounded-xl border border-[#FFCD00] flex flex-col gap-2";
        squad.id = "player-name-aus";
        for (let i = 0; i < aus.length; i++) {
            let player = document.createElement('li');
            player.className = "gap-3 player-name-aus border border-[#FFCD00] cursor-pointer rounded-xl px-5 py-2 hover:bg-[#FFCD00] hover:text-white";
            player.id = `player-aus-${i}`;
            player.innerHTML = aus[i].innerHTML; // Set the player's name
            
            squad.appendChild(player); // Append <li> to <ul>
        }

        yourSquad.appendChild(squad);
        console.log(yourSquad);

        
        yourTeam = 'Australia';
        document.getElementById('oppo-match-team').style.display = 'flex';
        })



document.getElementById('your-nz').addEventListener("click", 
    function(){
        isYourNZClicked = true;
        document.getElementById('match-squad').style.display = 'grid';
        let nz = document.getElementsByClassName('player-name-nz');
        for(let i=0; i < nz.length; i++){
            newZealandPlayer.push(nz[i].innerHTML);
        }
        console.log(nz[0].innerHTML);
        let yourSquad = document.getElementById('your-squad');
        yourSquad.style.backgroundColor = '#000000'; 
        yourSquad.innerHTML = 'New Zealand';

        let squad = document.createElement('ul');
        squad.className = "bg-white text-black text-xl font-normal p-3 my-3 rounded-xl border border-[#000000] flex flex-col gap-2";
        squad.id = "player-name-nz";
        for (let i = 0; i < nz.length; i++) {
            let player = document.createElement('li');
            player.className = "gap-3 player-name-nz border border-[#000000] cursor-pointer rounded-xl px-5 py-2 hover:bg-[#000000] hover:text-white";
            player.id = `player-nz-${i}`;
            player.innerHTML = nz[i].innerHTML; // Set the player's name

            
            squad.appendChild(player); // Append <li> to <ul>
        }

        yourSquad.appendChild(squad);
        console.log(yourSquad);

        
        yourTeam = 'New Zealand';
        document.getElementById('oppo-match-team').style.display = 'flex';
        })



document.getElementById('your-pak').addEventListener("click", 
    function(){
        isYourPakClicked = true;
        document.getElementById('match-squad').style.display = 'grid';
        let pak = document.getElementsByClassName('player-name-pak');
        for(let i=0; i < pak.length; i++){
            pakistanPlayer.push(pak[i].innerHTML);
        }
        console.log(pak[0].innerHTML);
        let yourSquad = document.getElementById('your-squad');
        yourSquad.style.backgroundColor = '#00ff00'; 
        yourSquad.innerHTML = 'Pakistan';

        let squad = document.createElement('ul');
        squad.className = "bg-white text-black text-xl font-normal p-3 my-3 rounded-xl border border-[#00ff00] flex flex-col gap-2";
        squad.id = "player-name-pak";
        for (let i = 0; i < pak.length; i++) {
            let player = document.createElement('li');
            player.className = "player-name-pak border border-[#00ff00] cursor-pointer rounded-xl px-5 py-2 hover:bg-[#00ff00] hover:text-white";
            player.id = `player-pak-${i}`;
            player.innerHTML = pak[i].innerHTML;// Set the player's name

            
            squad.appendChild(player); // Append <li> to <ul>
        }

        yourSquad.appendChild(squad);
        console.log(yourSquad);

        
        yourTeam = 'Pakistan';
        document.getElementById('oppo-match-team').style.display = 'flex';
        })




document.getElementById('your-afg').addEventListener("click", 
    function(){
        isYourAfgClicked = true;
        document.getElementById('match-squad').style.display = 'grid';
        let afg = document.getElementsByClassName('player-name-afg');
        for(let i=0; i < afg.length; i++){
            afghanPlayer.push(afg[i].innerHTML);
        }
        console.log(afg[0].innerHTML);
        let yourSquad = document.getElementById('your-squad');
        yourSquad.style.backgroundColor = '#3d85c6'; 
        yourSquad.innerHTML = 'Afghanistan';

        let squad = document.createElement('ul');
        squad.className = "bg-white text-black text-xl font-normal p-3 my-3 rounded-xl border border-[#3d85c6] flex flex-col gap-2";
        squad.id = "player-name-afg";
        for (let i = 0; i < afg.length; i++) {
            let player = document.createElement('li');
            player.className = "player-name-afg border border-[#3d85c6] cursor-pointer rounded-xl px-5 py-2 hover:bg-[#3d85c6] hover:text-white";
            player.id = `player-afg-${i}`;
            player.innerHTML = afg[i].innerHTML; // Set the player's name

            
            squad.appendChild(player); // Append <li> to <ul>
        }

        yourSquad.appendChild(squad);
        console.log(yourSquad);

        
        yourTeam = 'Afghanistan';
        document.getElementById('oppo-match-team').style.display = 'flex';
        })




document.getElementById('your-eng').addEventListener("click", 
    function(){
        isYourEngClicked = true;
        document.getElementById('match-squad').style.display = 'grid';
        let eng = document.getElementsByClassName('player-name-eng');
        for(let i=0; i < eng.length; i++){
            englandPlayer.push(eng[i].innerHTML);
        }
        console.log(eng[0].innerHTML);
        let yourSquad = document.getElementById('your-squad');
        yourSquad.style.backgroundColor = '#4a86e8'; 
        yourSquad.innerHTML = 'England';

        let squad = document.createElement('ul');
        squad.className = "bg-white text-black text-xl font-normal p-3 my-3 rounded-xl border border-[#4a86e8] flex flex-col gap-2";
        squad.id = "player-name-eng";
        for (let i = 0; i < eng.length; i++) {
            let player = document.createElement('li');
            player.className = "player-name-eng border border-[#4a86e8] cursor-pointer rounded-xl px-5 py-2 hover:bg-[#4a86e8] hover:text-white";
            player.id = `player-eng-${i}`;
            player.innerHTML = eng[i].innerHTML; // Set the player's name

            
            squad.appendChild(player); // Append <li> to <ul>
        }

        yourSquad.appendChild(squad);
        console.log(yourSquad);

        
        yourTeam = 'England';
        document.getElementById('oppo-match-team').style.display = 'flex';
        })




document.getElementById('your-ban').addEventListener("click", 
    function(){
        isYourBanClicked = true;
        document.getElementById('match-squad').style.display = 'grid';
        let ban = document.getElementsByClassName('player-name-ban');
        for(let i=0; i < ban.length; i++){
            bangladeshPlayer.push(ban[i].innerHTML);
        }
        console.log(ban[0].innerHTML);
        let yourSquad = document.getElementById('your-squad');
        yourSquad.style.backgroundColor = '#274e13'; 
        yourSquad.innerHTML = 'Bangladesh';

        let squad = document.createElement('ul');
        squad.className = "bg-white text-black text-xl font-normal p-3 my-3 rounded-xl border border-[#274e13] flex flex-col gap-2";
        squad.id = "player-name-ban";
        for (let i = 0; i < ban.length; i++) {
            let player = document.createElement('li');
            player.className = "player-name-ban border border-[#274e13] cursor-pointer rounded-xl px-5 py-2 hover:bg-[#274e13] hover:text-white";
            player.id = `player-ban-${i}`;
            player.innerHTML = ban[i].innerHTML; // Set the player's name

            
            squad.appendChild(player); // Append <li> to <ul>
        }

        yourSquad.appendChild(squad);
        console.log(yourSquad);

        
        yourTeam = 'Bangladesh';
        document.getElementById('oppo-match-team').style.display = 'flex';
        })








//selecting opponent squad
let oppoTeam = '*';
document.getElementById('oppo-ind').addEventListener("click", 
    function(){
        isOppoIndClicked = true;
        document.getElementById('match-squad').style.display = 'grid';
        let ind = document.getElementsByClassName('player-name-ind');
        for(let i=0; i < ind.length; i++){
            indianPlayer.push(ind[i].innerHTML);
        }
        let oppoSquad = document.getElementById('oppo-squad');
        oppoSquad.style.backgroundColor = '#35CAFE'; 
        oppoSquad.innerHTML = 'India';

        let squad = document.createElement('ul');
        squad.className = "bg-white text-black text-xl font-normal p-3 my-3 rounded-xl border border-[#35CAFE] flex flex-col gap-2";
        squad.id = "player-name-ind";
        for (let i = 0; i < ind.length; i++) {
            let player = document.createElement('li');
            player.className = "player-name-ind border border-[#35CAFE] cursor-pointer rounded-xl px-5 py-2 hover:bg-[#35CAFE] hover:text-white";
            player.id = `player-ind-${i}`;
            player.innerHTML = ind[i].innerHTML;

            
            squad.appendChild(player); // Append <li> to <ul>
        }

        oppoSquad.appendChild(squad);

        
        oppoTeam = 'India';
        
        if(yourTeam === oppoTeam){
            alert('Your Team and Opponent Team can not be the same.');
            document.getElementById('oppo-match-squad').style.display = 'none';
            document.getElementById('select-squad-div').style.display = 'none';
        }else{
            document.getElementById('oppo-match-squad').style.display = 'flex';
            document.getElementById('select-squad-div').style.display = 'flex';
        }
        });  


document.getElementById('oppo-sa').addEventListener("click", 
    function(){
        isOppoSAClicked = true;
        document.getElementById('match-squad').style.display = 'grid';
        let sa = document.getElementsByClassName('player-name-sa');
        for(let i=0; i < sa.length; i++){
            southAfricanPlayer.push(sa[i].innerHTML);
        }
        console.log(sa[0].innerHTML);
        let oppoSquad = document.getElementById('oppo-squad');
        oppoSquad.style.backgroundColor = '#38761d'; 
        oppoSquad.innerHTML = 'South Africa';

        let squad = document.createElement('ul');
        squad.className = "bg-white text-black text-xl font-normal p-3 my-3 rounded-xl border border-[#38761d] flex flex-col gap-2";
        squad.id = "player-name-sa";
        for (let i = 0; i < sa.length; i++) {
            let player = document.createElement('li');
            player.className = "player-name-sa border border-[#38761d] cursor-pointer rounded-xl px-5 py-2 hover:bg-[#38761d] hover:text-white";
            player.id = `player-sa-${i}`;
            player.innerHTML = sa[i].innerHTML;

            
            squad.appendChild(player); // Append <li> to <ul>
        }

        oppoSquad.appendChild(squad);

        
        oppoTeam = 'South Africa';
        if(yourTeam === oppoTeam){
            alert('Your Team and Opponent Team can not be the same.');
            document.getElementById('oppo-match-squad').style.display = 'none';
            document.getElementById('select-squad-div').style.display = 'none';
        }else{
            document.getElementById('oppo-match-squad').style.display = 'flex';
            document.getElementById('select-squad-div').style.display = 'flex';
        }
        });    



document.getElementById('oppo-aus').addEventListener("click", 
    function(){
        isOppoAusClicked = true;
        document.getElementById('match-squad').style.display = 'grid';
        let aus = document.getElementsByClassName('player-name-aus');
        for(let i=0; i < aus.length; i++){
            australianPlayer.push(aus[i].innerHTML);
        }
        console.log(aus[0].innerHTML);
        let oppoSquad = document.getElementById('oppo-squad');
        oppoSquad.style.backgroundColor = '#FFCD00'; 
        oppoSquad.innerHTML = 'Australia';

        let squad = document.createElement('ul');
        squad.className = "bg-white text-black text-xl font-normal p-3 my-3 rounded-xl border border-[#FFCD00] flex flex-col gap-2";
        squad.id = "player-name-aus";
        for (let i = 0; i < aus.length; i++) {
            let player = document.createElement('li');
            player.className = "gap-3 player-name-aus border border-[#FFCD00] cursor-pointer rounded-xl px-5 py-2 hover:bg-[#FFCD00] hover:text-white";
            player.id = `player-aus-${i}`;
            player.innerHTML = aus[i].innerHTML; // Set the player's name

            
            squad.appendChild(player); // Append <li> to <ul>
        }

        oppoSquad.appendChild(squad);
        console.log(oppoSquad);

        
        oppoTeam = 'Australia';
        if(yourTeam === oppoTeam){
            alert('Your Team and Opponent Team can not be the same.');
            document.getElementById('oppo-match-squad').style.display = 'none';
            document.getElementById('select-squad-div').style.display = 'none';
        }else{
            document.getElementById('oppo-match-squad').style.display = 'flex';
            document.getElementById('select-squad-div').style.display = 'flex';
        }
        })



document.getElementById('oppo-nz').addEventListener("click", 
    function(){
        isOppoNZClicked = true;
        document.getElementById('match-squad').style.display = 'grid';
        let nz = document.getElementsByClassName('player-name-nz');
        for(let i=0; i < nz.length; i++){
            newZealandPlayer.push(nz[i].innerHTML);
        }
        console.log(nz[0].innerHTML);
        let oppoSquad = document.getElementById('oppo-squad');
        oppoSquad.style.backgroundColor = '#000000'; 
        oppoSquad.innerHTML = 'New Zealand';

        let squad = document.createElement('ul');
        squad.className = "bg-white text-black text-xl font-normal p-3 my-3 rounded-xl border border-[#000000] flex flex-col gap-2";
        squad.id = "player-name-nz";
        for (let i = 0; i < nz.length; i++) {
            let player = document.createElement('li');
            player.className = "gap-3 player-name-nz border border-[#000000] cursor-pointer rounded-xl px-5 py-2 hover:bg-[#000000] hover:text-white";
            player.id = `player-nz-${i}`;
            player.innerHTML = nz[i].innerHTML; // Set the player's name
           
            squad.appendChild(player); // Append <li> to <ul>
        }

        oppoSquad.appendChild(squad);
        console.log(oppoSquad);

        
        oppoTeam = 'New Zealand';
        if(yourTeam === oppoTeam){
            alert('Your Team and Opponent Team can not be the same.');
            document.getElementById('oppo-match-squad').style.display = 'none';
            document.getElementById('select-squad-div').style.display = 'none';
        }else{
            document.getElementById('oppo-match-squad').style.display = 'flex';
            document.getElementById('select-squad-div').style.display = 'flex';
        }
        })



document.getElementById('oppo-pak').addEventListener("click", 
    function(){
        isOppoPakClicked = true;
        document.getElementById('match-squad').style.display = 'grid';
        let pak = document.getElementsByClassName('player-name-pak');
        for(let i=0; i < pak.length; i++){
            pakistanPlayer.push(pak[i].innerHTML);
        }
        console.log(pak[0].innerHTML);
        let oppoSquad = document.getElementById('oppo-squad');
        oppoSquad.style.backgroundColor = '#00ff00'; 
        oppoSquad.innerHTML = 'Pakistan';

        let squad = document.createElement('ul');
        squad.className = "bg-white text-black text-xl font-normal p-3 my-3 rounded-xl border border-[#00ff00] flex flex-col gap-2";
        squad.id = "player-name-pak";
        for (let i = 0; i < pak.length; i++) {
            let player = document.createElement('li');
            player.className = "player-name-pak border border-[#00ff00] cursor-pointer rounded-xl px-5 py-2 hover:bg-[#00ff00] hover:text-white";
            player.id = `player-pak-${i}`;
            player.innerHTML = pak[i].innerHTML;// Set the player's name

            
            squad.appendChild(player); // Append <li> to <ul>
        }

        oppoSquad.appendChild(squad);
        console.log(oppoSquad);

        
        oppoTeam = 'Pakistan';
        if(yourTeam === oppoTeam){
            alert('Your Team and Opponent Team can not be the same.');
            document.getElementById('oppo-match-squad').style.display = 'none';
            document.getElementById('select-squad-div').style.display = 'none';
        }else{
            document.getElementById('oppo-match-squad').style.display = 'flex';
            document.getElementById('select-squad-div').style.display = 'flex';
        }
        })




document.getElementById('oppo-afg').addEventListener("click", 
    function(){
        isOppoAfgClicked = true;
        document.getElementById('match-squad').style.display = 'grid';
        let afg = document.getElementsByClassName('player-name-afg');
        for(let i=0; i < afg.length; i++){
            afghanPlayer.push(afg[i].innerHTML);
        }
        console.log(afg[0].innerHTML);
        let oppoSquad = document.getElementById('oppo-squad');
        oppoSquad.style.backgroundColor = '#3d85c6'; 
        oppoSquad.innerHTML = 'Afghanistan';

        let squad = document.createElement('ul');
        squad.className = "bg-white text-black text-xl font-normal p-3 my-3 rounded-xl border border-[#3d85c6] flex flex-col gap-2";
        squad.id = "player-name-afg";
        for (let i = 0; i < afg.length; i++) {
            let player = document.createElement('li');
            player.className = "player-name-afg border border-[#3d85c6] cursor-pointer rounded-xl px-5 py-2 hover:bg-[#3d85c6] hover:text-white";
            player.id = `player-afg-${i}`;
            player.innerHTML = afg[i].innerHTML; // Set the player's name
            
            squad.appendChild(player); // Append <li> to <ul>
        }

        oppoSquad.appendChild(squad);
        console.log(oppoSquad);

        
        oppoTeam = 'Afghanistan';
        if(yourTeam === oppoTeam){
            alert('Your Team and Opponent Team can not be the same.');
            document.getElementById('oppo-match-squad').style.display = 'none';
            document.getElementById('select-squad-div').style.display = 'none';
        }else{
            document.getElementById('oppo-match-squad').style.display = 'flex';
            document.getElementById('select-squad-div').style.display = 'flex';
        }
        })




document.getElementById('oppo-eng').addEventListener("click", 
    function(){
        isOppoEngClicked = true;
        document.getElementById('match-squad').style.display = 'grid';
        let eng = document.getElementsByClassName('player-name-eng');
        for(let i=0; i < eng.length; i++){
            englandPlayer.push(eng[i].innerHTML);
        }
        console.log(eng[0].innerHTML);
        let oppoSquad = document.getElementById('oppo-squad');
        oppoSquad.style.backgroundColor = '#4a86e8'; 
        oppoSquad.innerHTML = 'England';

        let squad = document.createElement('ul');
        squad.className = "bg-white text-black text-xl font-normal p-3 my-3 rounded-xl border border-[#4a86e8] flex flex-col gap-2";
        squad.id = "player-name-eng";
        for (let i = 0; i < eng.length; i++) {
            let player = document.createElement('li');
            player.className = "player-name-eng border border-[#4a86e8] cursor-pointer rounded-xl px-5 py-2 hover:bg-[#4a86e8] hover:text-white";
            player.id = `player-eng-${i}`;
            player.innerHTML = eng[i].innerHTML; // Set the player's name

           
            squad.appendChild(player); // Append <li> to <ul>
        }

        oppoSquad.appendChild(squad);
        console.log(oppoSquad);

        
        oppoTeam = 'England';
        if(yourTeam === oppoTeam){
            alert('Your Team and Opponent Team can not be the same.');
            document.getElementById('oppo-match-squad').style.display = 'none';
            document.getElementById('select-squad-div').style.display = 'none';
        }else{
            document.getElementById('oppo-match-squad').style.display = 'flex';
            document.getElementById('select-squad-div').style.display = 'flex';
        }
        })




document.getElementById('oppo-ban').addEventListener("click", 
    function(){
        isOppoBanClicked = true;
        document.getElementById('match-squad').style.display = 'grid';
        let ban = document.getElementsByClassName('player-name-ban');
        for(let i=0; i < ban.length; i++){
            bangladeshPlayer.push(ban[i].innerHTML);
        }
        console.log(ban[0].innerHTML);
        let oppoSquad = document.getElementById('oppo-squad');
        oppoSquad.style.backgroundColor = '#274e13'; 
        oppoSquad.innerHTML = 'Bangladesh';

        let squad = document.createElement('ul');
        squad.className = "bg-white text-black text-xl font-normal p-3 my-3 rounded-xl border border-[#274e13] flex flex-col gap-2";
        squad.id = "player-name-ban";
        for (let i = 0; i < ban.length; i++) {
            let player = document.createElement('li');
            player.className = "player-name-ban border border-[#274e13] cursor-pointer rounded-xl px-5 py-2 hover:bg-[#274e13] hover:text-white";
            player.id = `player-ban-${i}`;
            player.innerHTML = ban[i].innerHTML; // Set the player's name


            
            squad.appendChild(player); // Append <li> to <ul>
        }

        oppoSquad.appendChild(squad);
        console.log(oppoSquad);

        
        oppoTeam = 'Bangladesh';
        if(yourTeam === oppoTeam){
            alert('Your Team and Opponent Team can not be the same.');
            document.getElementById('oppo-match-squad').style.display = 'none';
            document.getElementById('select-squad-div').style.display = 'none';
        }else{
            document.getElementById('oppo-match-squad').style.display = 'flex';
            document.getElementById('select-squad-div').style.display = 'flex';
        }
        })





