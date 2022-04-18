const corn = {
    name: "corn",
    yield: 3,
    factor: {
        sun: {
        low: -50,
        medium: 0,
        high: 50,
        },
        wind: {
            low: -60,
            medium: 0,
            extreme: 50,
            },
    },
};

const environmentFactors = {
sun: "high",
wind: "low"
};


getYieldForPlant = (input, environmentFactors) => {
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


console.log(getYieldForPlant(corn, environmentFactors))