function start(){
    document.getElementById("myButton").addEventListener("click", function() {
        // This function will be called when the button is clicked
        var response = prompt("How much money do you make annually?");
        console.log(response); // You can handle the response as needed
        if(response >= 1000000){
            var responseAfterTax = response * 37/100
            alert("Wow! You are rich! You pay approximatly " + responseAfterTax + " in taxes.");
            var response2 = prompt("How much money do you spend per year?");
            console.log(response2); // You can handle the response as needed
            if (response2 > response-responseAfterTax){
                alert("Watch out for your spending! You are spending more than you earn!");
            }
            else{
                alert("Good job! You are spending less than you earn!");
                var savingsResponse = (responseAfterTax - response2) * 1/12;
                alert("You should save " + savingsResponse + " each month!");
            }
        }
        else if(response >= 197000 && response <= 250000){
            var responseAfterTax = response * 32/100
            alert("Wow! You fall in upper class! You pay approximatly " + responseAfterTax + " in taxes.");
            var responseSpending = prompt("How much money do you spend monthly? (Rough Estimate)");
            if (responseSpending > response){
                alert("Watch out for your spending! You are spending more than you earn!");
            }
            else{
                alert("Good job! You are spending less than you earn!");
                var savingsResponse = (responseAfterTax - responseSpending) * 12/100;
                alert("You should save " + savingsResponse + " each month!");
            }
                
        }
        else{
            var responseAfterTax = response * 24/100
            alert("Wow! You fall in middle/lower class! You pay approximatly " + responseAfterTax + " in taxes.");
            var responseSpending = prompt("How much money do you spend monthly? (Rough Estimate)");
            if (responseSpending > response){
                alert("Watch out for your spending! You are spending more than you earn!");
            }
            else{
                alert("Good job! You are spending less than you earn!");
                var savingsResponse = (responseAfterTax - responseSpending) * 12/100;
                alert("You should save " + savingsResponse + " each month!");
            }
        }
    });

}