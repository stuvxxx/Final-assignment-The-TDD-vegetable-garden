// GET YIELD \\

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
}
}



getYieldForCrop = (input) => {
    jield = getYieldForPlant(input.crop)
    return jield * input.numCrops
}

getTotalYield = (input) => {
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

getProfitFromPlant = (input) => {
    return input.yield * input.saleprice - 1
}

getProfitFromCrops = (input) => {
    return getRevenueForCrop(input) - getCostForCrop(input)
}

getTotalProfit = (input) => {
    const seperatedTotalProfit = (input.crops.map(x => getProfitFromCrops(x)))
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