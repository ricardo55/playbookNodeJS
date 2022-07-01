const Reader = require("../../lib/utils/Reader");

describe("Test for Reader", () => {

    test("1. Obtain qty list of explorers", () => {
        const explorers = Reader.readJsonFile("./explorers.json");
        expect(explorers.length).toBe(15);
    });

    test("2. leer archivo Json que no existe", () => {
        const explorers = Reader.readJsonFile("./explorers.json");
        expect(explorers).toBe(explorers);
    });

});