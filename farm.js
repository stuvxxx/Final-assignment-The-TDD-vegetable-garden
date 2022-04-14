getYieldForPlant = (crops) => {
    return crops.yield
}

getYieldForCrop = (crops) => {
    jield = getYieldForPlant(crops.crop)
    return jield * crops.numCrops
}

getTotalYield = (obj) => {
    console.log(obj)
    const seperatedTotalYield = (obj.map(x => getYieldForCrop(x)))
    const sumTotalYield = seperatedTotalYield.reduce((partialSum, a) => partialSum + a, 0);
    return sumTotalYield
  }
module.exports = { getYieldForPlant, getYieldForCrop, getTotalYield } 