
function estimateTransactionFee() {

    const FEE_PERCENTAGE = 0.015;
    const MIN_FEE = 10;
    const MAX_FEE = 70;
    
    const amountToSend = parseFloat(prompt("Unatuma Ngapi? (KES):"));
    
    let calculatedFee = amountToSend * FEE_PERCENTAGE;
    
    if (calculatedFee < MIN_FEE) {
        calculatedFee = MIN_FEE;
    } else if (calculatedFee > MAX_FEE) {
        calculatedFee = MAX_FEE;
    }
    
    // Calc total amount
    const totalAmount = amountToSend + calculatedFee;
    
    //results
    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${calculatedFee}`);
    console.log(`Total amount to be debited: KES ${totalAmount}\n`);
    console.log("Send Money Securely!");
}

estimateTransactionFee();