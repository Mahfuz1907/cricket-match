//selecting your squad
let yourTeam;
document.getElementById('your-ind').addEventListener("click", 
    function(){
        document.getElementById('match-squad').style.display = 'grid';
        let ind = document.getElementById('ind');
        let yourSquad = document.getElementById('your-squad');
        document.getElementById('your-squad').innerHTML = ind.innerHTML;
        yourSquad.style.backgroundColor = '#35CAFE';
        yourTeam = 'India';
        document.getElementById('oppo-match-team').style.display = 'flex';
        });    


document.getElementById('your-sa').addEventListener("click", 
    function(){
        document.getElementById('match-squad').style.display = 'grid';
        let sa = document.getElementById('sa');
        let yourSquad = document.getElementById('your-squad');
        document.getElementById('your-squad').innerHTML = sa.innerHTML;
         yourSquad.style.backgroundColor = '#38761d';
         yourTeam = 'South Africa';
         document.getElementById('oppo-match-team').style.display = 'flex';
        })


document.getElementById('your-aus').addEventListener("click", 
    function(){
        document.getElementById('match-squad').style.display = 'grid';
        let aus = document.getElementById('aus');
        let yourSquad = document.getElementById('your-squad');
        document.getElementById('your-squad').innerHTML = aus.innerHTML;
         yourSquad.style.backgroundColor = '#FFCD00';
         yourTeam = 'Australia';
         document.getElementById('oppo-match-team').style.display = 'flex';
        })



document.getElementById('your-nz').addEventListener("click", 
    function(){
        document.getElementById('match-squad').style.display = 'grid';
        let nz = document.getElementById('nz');
        let yourSquad = document.getElementById('your-squad');
        document.getElementById('your-squad').innerHTML = nz.innerHTML;
         yourSquad.style.backgroundColor = '#000000';
         yourTeam = 'New Zealand';
         document.getElementById('oppo-match-team').style.display = 'flex';
        })



document.getElementById('your-pak').addEventListener("click", 
    function(){
        document.getElementById('match-squad').style.display = 'grid';
        let pak = document.getElementById('pak');
        let yourSquad = document.getElementById('your-squad');
        document.getElementById('your-squad').innerHTML = pak.innerHTML;
         yourSquad.style.backgroundColor = '#00ff00';
         yourTeam = 'Pakistan';
         document.getElementById('oppo-match-team').style.display = 'flex';
        })


document.getElementById('your-afg').addEventListener("click", 
    function(){
        document.getElementById('match-squad').style.display = 'grid';
        let afg = document.getElementById('afg');
        let yourSquad = document.getElementById('your-squad');
        document.getElementById('your-squad').innerHTML = afg.innerHTML;
         yourSquad.style.backgroundColor = '#3d85c6';
         yourTeam = 'Afghanistan';
         document.getElementById('oppo-match-team').style.display = 'flex';
        })


document.getElementById('your-eng').addEventListener("click", 
    function(){
        document.getElementById('match-squad').style.display = 'grid';
        let eng = document.getElementById('eng');
        let yourSquad = document.getElementById('your-squad');
        document.getElementById('your-squad').innerHTML = eng.innerHTML;
         yourSquad.style.backgroundColor = '#4a86e8';
         yourTeam = 'England';
         document.getElementById('oppo-match-team').style.display = 'flex';
        })


document.getElementById('your-ban').addEventListener("click", 
    function(){
        document.getElementById('match-squad').style.display = 'grid';
        let ban = document.getElementById('ban');
        let yourSquad = document.getElementById('your-squad');
        document.getElementById('your-squad').innerHTML = ban.innerHTML;
         yourSquad.style.backgroundColor = '#274e13';
         yourTeam = 'Bangladesh';
         document.getElementById('oppo-match-team').style.display = 'flex';
        })






//selecting opponent squad
let oppoTeam = '*';
document.getElementById('oppo-ind').addEventListener("click", 
    function(){
        document.getElementById('match-squad').style.display = 'grid';
        let ind = document.getElementById('ind');
        let oppoSquad = document.getElementById('oppo-squad');
        document.getElementById('oppo-squad').innerHTML = ind.innerHTML;
         oppoSquad.style.backgroundColor = '#35CAFE';
         oppoTeam = 'India';

        if(yourTeam === oppoTeam){
            alert('Your Team and Opponent Team can not be the same.');
            document.getElementById('oppo-match-squad').style.display = 'none';
            document.getElementById('select-squad-div').style.display = 'none';
        }else{
            document.getElementById('oppo-match-squad').style.display = 'flex';
            document.getElementById('select-squad-div').style.display = 'flex';
        }
        })




document.getElementById('oppo-sa').addEventListener("click", 
    function(){
        document.getElementById('match-squad').style.display = 'grid';
        let sa = document.getElementById('sa');
        let oppoSquad = document.getElementById('oppo-squad');
        document.getElementById('oppo-squad').innerHTML = sa.innerHTML;
         oppoSquad.style.backgroundColor = '#38761d';
         oppoTeam = 'South Africa';

        if(yourTeam === oppoTeam){
            alert('Your Team and Opponent Team can not be the same.');
            document.getElementById('oppo-match-squad').style.display = 'none';
            document.getElementById('select-squad-div').style.display = 'none';
        }else{
            document.getElementById('oppo-match-squad').style.display = 'flex';
            document.getElementById('select-squad-div').style.display = 'flex';
        }
        })


document.getElementById('oppo-aus').addEventListener("click", 
    function(){
        document.getElementById('match-squad').style.display = 'grid';
        let aus = document.getElementById('aus');
        let oppoSquad = document.getElementById('oppo-squad');
        document.getElementById('oppo-squad').innerHTML = aus.innerHTML;
         oppoSquad.style.backgroundColor = '#FFCD00';
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
        document.getElementById('match-squad').style.display = 'grid';
        let nz = document.getElementById('nz');
        let oppoSquad = document.getElementById('oppo-squad');
        document.getElementById('oppo-squad').innerHTML = nz.innerHTML;
         oppoSquad.style.backgroundColor = '#000000';
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
        document.getElementById('match-squad').style.display = 'grid';
        let pak = document.getElementById('pak');
        let oppoSquad = document.getElementById('oppo-squad');
        document.getElementById('oppo-squad').innerHTML = pak.innerHTML;
         oppoSquad.style.backgroundColor = '#00ff00';
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
        document.getElementById('match-squad').style.display = 'grid';
        let afg = document.getElementById('afg');
        let oppoSquad = document.getElementById('oppo-squad');
        document.getElementById('oppo-squad').innerHTML = afg.innerHTML;
         oppoSquad.style.backgroundColor = '#3d85c6';
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
        document.getElementById('match-squad').style.display = 'grid';
        let eng = document.getElementById('eng');
        let oppoSquad = document.getElementById('oppo-squad');
        document.getElementById('oppo-squad').innerHTML = eng.innerHTML;
         oppoSquad.style.backgroundColor = '#4a86e8';
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
        document.getElementById('match-squad').style.display = 'grid';
        let ban = document.getElementById('ban');
        let oppoSquad = document.getElementById('oppo-squad');
        document.getElementById('oppo-squad').innerHTML = ban.innerHTML;
         oppoSquad.style.backgroundColor = '#274e13';
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





// rejecting for same opponent
//
