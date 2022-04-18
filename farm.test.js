const { 
    getYieldForPlant, 
    getYieldForCrop, 
    getTotalYield,

    getCostForPlant,
    getCostForCrop, 
    getCostsForMultipleCrops,

    getRevenueForPlant,
    getRevenueForCrop,
    getRevenueFormultipleCrops,

//    getProfitFromPlant,
//    getProfitFromCrops,
//    getTotalProfit
} = require("./farm");



describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 30,
    };

    test("Get yield for plant with no environment factors", () => {
        expect(getYieldForPlant(corn)).toBe(30);
    });
});
describe("getYieldForCrop", () => {
    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input)).toBe(30);
    });
});


describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalYield({ crops })).toBe(23);
    });

    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getTotalYield({ crops })).toBe(0);
    });
});

describe("getCostForPlant", () => {
    const corn = {
        name: "corn",
        yield: 30,        
    };

    test("Get costs for plant with no environment factors", () => {
        expect(getCostForPlant(corn)).toBe(1);
    });
});

describe("getCostForCrops", () => {
    test("Calculate cost for yielding crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 5,
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getCostForCrop(input)).toBe(10);
    });
});



describe("getCostsForMultipleCrops", () => {
    test("Calculate costs for yielding muliple crops ", () => {
        const corn = {
            name: "corn",
            yield: 8,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 2, 
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getCostsForMultipleCrops({ crops })).toBe(7);
    });
    test("Calculate costs of yielding 0 number of crops", () => {
        const corn = {
            name: "corn",
            yield: 30,
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getCostsForMultipleCrops({ crops })).toBe(0);
    });
    test("Calculate costs of yielding 10 crops with zero yield", () => {
        const corn = {
            name: "corn",
            yield: 0,
        };
        const crops = [{ crop: corn, numCrops: 10 }];
        expect(getCostsForMultipleCrops({ crops })).toBe(10);
    });
});





describe("getRevenueForPlant", () => {
    test("Calculate revenue for one plant", () => {
        const corn = {
            name: "corn",
            yield: 10,
            saleprice: 2,
        };
        expect(getRevenueForPlant(corn)).toBe(20)
    });
});

describe("getRevenueForCrop", () => {
    test("Calculate revenue for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 10,
            saleprice: 2,
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getRevenueForCrop(input)).toBe(200)
    });
});

describe("getRevenueFormultipleCrops", () => {
    test("Calculate revenue for multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 10,
            saleprice: 2,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 2,
            saleprice: 4,
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getRevenueFormultipleCrops({crops})).toBe(116)
    })
    test("Calculate revenue for multiple crops with no yield", () => {
        const corn = {
            name: "corn",
            yield: 0,
            saleprice: 2,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 0,
            saleprice: 4,
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getRevenueFormultipleCrops({crops})).toBe(0)
    })
    test("Calculate revenue for multiple crops where only one has yield", () => {
        const corn = {
            name: "corn",
            yield: 5,
            saleprice: 2,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 0,
            saleprice: 4,
        };
        const peach = {
            name: "pumpkin",
            yield: 0,
            saleprice: 4,
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
            { crop: peach, numCrops: 2 },
        ];
        expect(getRevenueFormultipleCrops({crops})).toBe(50)
    })
});



describe("getProfitFromPlant", () => {
    const corn = {
        name: "corn",
        yield: 30,
        saleprice: 2,
    };

    test("Calculate the profit from one plant", () => {
        expect(getProfitFromPlant(corn)).toBe(59);
    });
});

describe("getProfitFromCrops", () => {
    test("Calculate profit for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 10,
            saleprice: 2,
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getProfitFromCrops(input)).toBe(190)
    });
});



describe("getTotalProfit", () => {
    test("Calculate profit for multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 10,
            saleprice: 2,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 2,
            saleprice: 4,
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalProfit({crops})).toBe(109)
    })
    test("Calculate profit for multiple crops with no yield", () => {
        const corn = {
            name: "corn",
            yield: 0,
            saleprice: 2,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 0,
            saleprice: 4,
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalProfit({crops})).toBe(-7)
    })
    test("Calculate profit for multiple crops where only one has yield", () => {
        const corn = {
            name: "corn",
            yield: 5,
            saleprice: 2,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 0,
            saleprice: 4,
        };
        const peach = {
            name: "pumpkin",
            yield: 0,
            saleprice: 4,
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
            { crop: peach, numCrops: 2 },
        ];
        expect(getTotalProfit({crops})).toBe(41)
    })
});
