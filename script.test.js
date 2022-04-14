const {aap} = require("./script.js")

describe('My work', () => {
    test("Kijken of dit werkt", () => {
        expect(aap(2,3)).toBe(5)
    })
  })
