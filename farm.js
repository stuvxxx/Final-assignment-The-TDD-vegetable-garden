// GET YIELD \\

getYieldForPlant = (input) => {
    return input.yield
}

getYieldForCrop = (input) => {
    jield = getYieldForPlant(input.crop)
    return jield * input.numCrops
}

getTotalYield = (input) => {
    console.log(input)
    const seperatedTotalYield = (input.crops.map(x => getYieldForCrop(x)))
    const sumTotalYield = seperatedTotalYield.reduce((partialSum, a) => partialSum + a, 0);
    return sumTotalYield
}

// GET COSTS \\

getCostForPlant = () => {
    return 1
}

getCostForCrop = (input) => {
    costForOne = getCostForPlant(input.crop)
    return costForOne * input.numCrops
}

getCostsForMultipleCrops = (input) => {
    console.log(input)
    const seperatedTotalCost = (input.crops.map(x => getCostForCrop(x)))
    const sumTotalCost= seperatedTotalCost.reduce((partialSum, a) => partialSum + a, 0);
    return sumTotalCost
}

// GET REVENUE \\

getRevenueForPlant = (input) => {
    jield = getYieldForPlant(input)
    return jield * input.saleprice
}

getRevenueForCrop = (input) => {
    totalYield = getRevenueForPlant(input.crop)
    return totalYield * input.numCrops
}

getRevenueFormultipleCrops = (input) => {
    const seperatedTotalRevenue = (input.crops.map(x => getRevenueForCrop(x)))
    const sumTotalRevenue = seperatedTotalRevenue.reduce((partialSum, a) => partialSum + a, 0);
    return sumTotalRevenue
}
 
// GET PROFIT \\ 




module.exports = { 
    getYieldForPlant, 
    getYieldForCrop, 
    getTotalYield,

    getCostForPlant,
    getCostForCrop, 
    getCostsForMultipleCrops,

    getRevenueForPlant,
    getRevenueForCrop,
    getRevenueFormultipleCrops,

 //   getProfitFromPlant,
 //   getProfitFromCrops,
 //   getTotalProfit
}