const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Test for ExplorerController",()=> {

    test("1. Filter list of explorers by mission",()=>{
        const explorers = ExplorerController.getExplorersByMission("node");
        expect(explorers.length).toBe(10);        
    });

    test("2. Filter list of explorers, just username",()=>{
        const explorers = ExplorerController.getExplorersUsernamesByMission("node");
        expect(explorers[0]).toBe("ajolonauta1");        
    });    

    test("3. Filter list of explorers, amount",()=>{
        const explorers = ExplorerController.getExplorersAmountByMission("node");
        expect(explorers).toBe(10);        
    });

});
//------


describe("Test service ExplorerController", ()=>{
    test("1.Probando metodo static getExplorersByMission, que recibe lista de explorers", ()=>{
        const getExplorers=ExplorerController.getExplorersByMission("node");
        expect(getExplorers).toBeDefined();
    });

    test("2.Test service metodo ExplorerController getExplorersUsernamesByMission", ()=>{
        const getExplorersUsernamesByMission= ExplorerController.getExplorersUsernamesByMission("node");
        expect(getExplorersUsernamesByMission).toBeDefined();
    });

    // test ("3.Test service metodo ExplorerControoller getExplorersAmonutByMission(mission)", ()=>{
    //     const getAmountOfExplorersByMission= ExplorerController.getAmountOfExplorersByMission("node")
    //     expect(getAmountOfExplorersByMission).toBeDefined()
    // })

    // test ("4.Test service metodo ExplorerControoller applyValidationInNumber(number)", ()=>{
    //     const applyValidationInNumber= ExplorerController.applyValidationInNumber(3)
    //     expect(applyValidationInNumber).toBeDefined()
    // })
});