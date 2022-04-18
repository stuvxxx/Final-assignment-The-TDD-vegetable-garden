const corn = {
    name: "corn",
    yield: 30,
    factor: {
        sun: {
        low: -50,
        medium: 0,
        high: 50,
        },
        wind: {
            low: -50,
            medium: 0,
            extreme: 40},
    },
    };

const environmentFactors = {
sun: "low",
wind: "extreme"
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
    console.log(factorsToCountIn)
}


getYieldForPlant(corn, environmentFactors)