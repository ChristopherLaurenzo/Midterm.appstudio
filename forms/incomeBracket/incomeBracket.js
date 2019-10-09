
btnSubmit.onclick=function(){
  
}


btnAgain.onclick=function(){
let yourIncome = 0
  
}

let yourIncome = inptIncome.value
let taxBracket = " "
if (yourIncome < 30000) {
   taxBracket = 8;
} else if (30000 < yourIncome && yourIncome < 99999) {
  taxBracket = 15;
} else if (yourIncome > 99999) {
  taxBracket = 25;
}

lblOutcome.value = (`With your income of $${inptIncome}, you are in a tax bracket of ${taxBracket}%`)
