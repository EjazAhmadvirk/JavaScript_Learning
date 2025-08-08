let amount = 2500;
if (amount >= 1000){
    if(amount >= 1000 && amount < 1500){
        console.log("You are eligible for a 10% discount.");

    }else if(amount >= 1500 && amount < 2000){
        console.log("You are eligible for a 15% discount.");

    }else if(amount >= 2000){
        console.log("You are eligible for a 20% discount.");
    }
}else{ 
    console.log("You are not eligible for any discount.");
}