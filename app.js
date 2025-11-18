function monthlyPayment(){

    let P = document.getElementById("amount").value;
    let r= document.getElementById("interest").value;
    let n = document.getElementById("months").value;

    let payment= P * (r * Math.pow((1+r/100),n)) /(Math.pow((1+r/100),n) -1);

    let result = document.getElementById("result");
    result.textContent = `The monthly payment would be ${payment}`;
    
}