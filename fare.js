// calc fare
function calculateBodaFare() {
    // constants
    const baseFare = 50;
    const chargePerKm = 15;
    
    // distance
    const distanceInKm = parseFloat(prompt("Unafika wapi Mkubwa? Kilometer ngapi?:"));
    
    // calc fare
    const distanceCharge = distanceInKm * chargePerKm;
    const totalFare = baseFare + distanceCharge;
    
    //results
    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${distanceCharge}`);
    console.log(`Total: KES ${totalFare}\n`);
    console.log("Panda Pikipiki!");
}

calculateBodaFare();