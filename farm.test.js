const { 
    getYieldForPlant, 
    getYieldForCrop, 
    getTotalYield, 
    getCostForCrop, 
    getCostsForMultipleCrops 
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

describe("getCostForCrop", () => {
    test("Calculate cost for yielding crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 5,
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getCostForCrop(input)).toBe(50);
    });
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
        expect(getCostsForMultipleCrops({ crops })).toBe(44);
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
        expect(getCostsForMultipleCrops({ crops })).toBe(0);
    });
});
