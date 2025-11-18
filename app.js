function monthlyPayment(){

    let P = document.getElementById("amount").value;
    let r= (document.getElementById("interest").value / 100) /12  ;
    let n = document.getElementById("months").value;

    let payment= P * ( r * Math.pow((1+r),n) ) / (Math.pow((1+r),n)-1) ;

    let result = document.getElementById("result");
    result.textContent = `The monthly payment would be $${payment.toFixed(2)}`;
    
}