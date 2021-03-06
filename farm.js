// GET YIELD \\
// This function does most of the work and except for the 'costs' functions all the others use this one eventually. \\
getYieldForPlant = (input, environmentFactors) => {
    if (typeof environmentFactors === "undefined") {
        return input.yield
      } else {
    let factorsToCountInWithUndefined = []
    const factorsToCheck = Object.keys(environmentFactors)
    factorsToCheck.map(x => {
        if(input.factor[x] !== undefined) {
            const value = (environmentFactors[x])
            factorsToCountInWithUndefined.push(input.factor[x][value])
        }
    });
    let factorsToCountIn = factorsToCountInWithUndefined.filter(x => {
        return x !== undefined;
    })
    let factorsToCalculateWith = factorsToCountIn.map(x => {
        return (100 + x) / 100 
    })
    let theFinalYield = input.yield
    for(x = 0;x < factorsToCalculateWith.length; x++) {
        theFinalYield = theFinalYield * factorsToCalculateWith[x]
    }
    return theFinalYield
}}
getYieldForCrop = (input, environmentFactors) => {
    jield = getYieldForPlant(input.crop, environmentFactors)
    return jield * input.numCrops
}
getTotalYield = (input, environmentFactors) => {
    const seperatedTotalYield = (input.crops.map(x => getYieldForCrop(x, environmentFactors)))
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
    const seperatedTotalCost = (input.crops.map(x => getCostForCrop(x)))
    const sumTotalCost= seperatedTotalCost.reduce((partialSum, a) => partialSum + a, 0);
    return sumTotalCost
}
// GET REVENUE \\
getRevenueForPlant = (input, environmentFactors) => {
    jield = getYieldForPlant(input, environmentFactors)
    return jield * input.saleprice
}
getRevenueForCrop = (input, environmentFactors) => {
    totalYield = getRevenueForPlant(input.crop, environmentFactors)
    return totalYield * input.numCrops
}
getRevenueFormultipleCrops = (input, environmentFactors) => {
    const seperatedTotalRevenue = (input.crops.map(x => getRevenueForCrop(x, environmentFactors)))
    const sumTotalRevenue = seperatedTotalRevenue.reduce((partialSum, a) => partialSum + a, 0);
    return sumTotalRevenue
}
// GET PROFIT \\ 
getProfitFromPlant = (input) => {
    return input.yield * input.saleprice - 1
}
getProfitFromCrops = (input, environmentFactors) => {
    return getRevenueForCrop(input, environmentFactors) - getCostForCrop(input)
}
getTotalProfit = (input, environmentFactors) => {
    const seperatedTotalProfit = (input.crops.map(x => getProfitFromCrops(x, environmentFactors)))
    const sumTotalRevenue = seperatedTotalProfit.reduce((partialSum, a) => partialSum + a, 0);
    return sumTotalRevenue
}
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
    getProfitFromPlant,
    getProfitFromCrops,
    getTotalProfit
}