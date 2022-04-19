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

    getProfitFromPlant,
    getProfitFromCrops,
    getTotalProfit
} = require("./farm");



describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 30,
    };

    test("Get yield for plant with no environment factors", () => {
        expect(getYieldForPlant(corn)).toBe(30);
    });
    test("Get yield for plant with environmental factors", () => {
        const corn = {
            name: "corn",
            yield: 30,
            factor: {
                sun: {
                low: -50,
                medium: 0,
                high: 50,
                },
            },
            };
            
            const environmentFactors = {
            sun: "low",
            };
        expect(getYieldForPlant(corn, environmentFactors)).toBe(15)    
    })
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





describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops AND enviromental factors", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factor: {
                sun: {
                low: -50,
                medium: 0,
                high: 50,
                },
            },
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
            factor: {
                sun: {
                low: -50,
                medium: 0,
                high: 50,
                },
            },
            
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        const environmentFactors = {
            sun: "low",
            };
        expect(getTotalYield({ crops }, environmentFactors)).toBe(11.5);
    });

    test("Calculate total yield with 0 amount AND enviroment factors", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factor: {
                sun: {
                low: -50,
                medium: 0,
                high: 50,
                },
            },
        };
        const environmentFactors = {
            sun: "high",
            };
        
        const crops = [{ crop: corn, numCrops: 0 }];

        expect(getTotalYield({ crops }, environmentFactors)).toBe(0);
    });
});

    test("Calculate total yield with multiple crops AND multiple enviromental factors AND some zero's", () => {
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
                    low: 0,
                    medium: 0,
                    high: 0,
                },
            },
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: 0,
                    medium: 0,
                    high: 0,
                },
                rain: {
                    low: -25,
                    medium: 20,
                    high: 30,
                },
            },

        };
        const wheat = {
            name: "wheat",
            yield: 4,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: 0,
                    medium: -25,
                    high: -50,
                },
                    rain: {
                    low: -25,
                    medium: 20,
                    high: 30,
                },
            },

        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
            { crop: wheat, numCrops: 2 },
        ];
        const environmentFactors = {
            sun: "low",
            wind: "medium",
            rain: "medium"
            };
        expect(getTotalYield({ crops }, environmentFactors)).toBe(15.9);
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
            factor: {
                sun: {
                low: -50,
                medium: 0,
                high: 50,
                },
            },  
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        const environmentFactors = {
            sun: "low",
            };
        expect(getRevenueForCrop(input, environmentFactors)).toBe(100)
    });
});




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

    test("Calculate profit for crop, AND enviromental factor", () => {
        const corn = {
        name: "corn",
        yield: 10,
        saleprice: 2,
        factor: {
            sun: {
            low: -50,
            medium: 0,
            high: 50,
            },
        },
        };
        const input = {
        crop: corn,
        numCrops: 10,
        };
        const environmentFactors = {
            sun: "low",
            };
        expect(getProfitFromCrops(input, environmentFactors)).toBe(90)
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
    test("Calculate profit for multiple crops AND multiple enviromental factors, some zero's and unaccountable factors the full package!", () => {
        const corn = {
            name: "corn",
            yield: 10,
            saleprice: 2,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: 0,
                    medium: -20,
                    high: -40,
                    },
                rain: {
                    low: 10,
                    medium: 20,
                    high: 30,
                    },
            },
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 0,
            saleprice: 4,
            factor: {
                sun: {
                    low: -20,
                    medium: 0,
                    high: 20,
                },
                rain: {
                    low: 10,
                    medium: 20,
                    high: 30,
                    },
            },
        };
        const wheat = {
            name: "wheat",
            yield: 30,
            saleprice: 4,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: 0,
                    medium: -25,
                    high: -50,
                    },
                rain: {
                    low: 10,
                    medium: 20,
                    high: 30,
                    },
            },
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
            { crop: wheat, numCrops: 2 },
        ];
        const environmentFactors = {
            sun: "medium",
            wind: "low",
            rain: "high",
            };
        expect(getTotalProfit({crops}, environmentFactors)).toBe(433)
    })
});
