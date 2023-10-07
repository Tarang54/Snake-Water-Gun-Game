let ar = ['snake', 'water', 'gun']
let play = true;
while(play){
let comp = ar[Math.floor(Math.random()*3)]
let user = prompt("Enter your choice")
if(comp == user)
    alert("Tie")
else if (comp == 'snake' && user == 'water')
    alert("You Lose")
else if(comp == 'snake' && user == 'gun')
    alert("You Win")
else if(comp == 'water' && user == 'snake')
    alert("You Win")
else if(comp == 'water' && user == 'gun')
    alert("You Lose")
else if(comp == 'gun' && user == 'water')
    alert("You Win")
else if(comp == 'gun' && user == 'snake')
    alert("You Lose")
else
    alert("Wrong Input");
play = confirm("Do you want to play again?")
}