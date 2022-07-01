const FizzbuzzService= require('./../../lib/services/FizzbuzzService')

test("1. Validacion de explorers applyValidationInExplorer score divisible entre 1", ()=>{
    const explorer = FizzbuzzService.applyValidationInExplorer({name: "Explorer1", score: 1})  
    const res= {name: "Explorer1", score: 1,  trick: 1}
    expect(explorer).toStrictEqual(res)
})

test("2. Validacion de explorers applyValidationInExplorer score divisible entre 3 && 5", ()=>{
    const explorer = FizzbuzzService.applyValidationInExplorer({name: "Explorer2", score: 15})  
    const res= {name: "Explorer2", score: 15,  trick: "FIZZBUZZ"}
    expect(explorer).toStrictEqual(res)
})

test("3. Validacion de explorers applyValidationInExplorer score divisible entre 3", ()=>{
    const explorer = FizzbuzzService.applyValidationInExplorer({name: "Explorer3", score: 3})  
    const res= {name: "Explorer3", score: 3, trick: "FIZZ"}
    expect(explorer).toStrictEqual(res)
})
test("4. Validacion de explorers applyValidationInExplorer score divisible entre 5", ()=>{
    const explorer = FizzbuzzService.applyValidationInExplorer({name: "Explorer5", score: 5}) 
    const res= {name: "Explorer5", score: 5, trick: "BUZZ"}
    expect(explorer).toStrictEqual(res)
})

test("5. Validacion de explorers applyValidationInExplorer score divisible entre 5", ()=>{
    const explorer = FizzbuzzService.applyValidationInExplorer({name: "Explorer5", score: 5}) 
    const res= {name: "Explorer5", score: 5, trick: "BUZZ"}
    expect(explorer).not.toBeUndefined()
})

// test("6. Validacion de explorers applyValidationInNumber ", ()=>{
//     const explorer = FizzbuzzService.applyValidationInNumber({number:  5}) 
//     const res= {score: 3, trick: "Fizzz"}
//     expect(explorer).not.toBeUndefined()
// }) 

//const FizzbuzzService = require("../../lib/services/FizzbuzzService");

describe("Test for ExplorerService",()=> {

    test("1. Obtain trick number",()=>{
        const explorer1 = {name: "Explorer1", score: 1};
        const explorerResult  = FizzbuzzService.applyValidationInExplorer(explorer1);
        expect(explorerResult.trick).toBe(1);        
    });    

    test("2. Obtain trick fizz",()=>{
        const explorer3 = {name: "Explorer3", score: 3};
        const explorerResult = FizzbuzzService.applyValidationInExplorer(explorer3);
        expect(explorerResult.trick).toBe("FIZZ");        
    });

    test("3. Obtain trick buzz",()=>{
        const explorer5 = {name: "Explorer5", score: 5};
        const explorerResult = FizzbuzzService.applyValidationInExplorer(explorer5);
        expect(explorerResult.trick).toBe("BUZZ");        
    });

    test("4. Obtain trick fizzbuzz",()=>{        
        const explorer15 = {name: "Explorer15", score: 15};
        const explorerResult = FizzbuzzService.applyValidationInExplorer(explorer15);
        expect(explorerResult.trick).toBe("FIZZBUZZ");        
    });
    

    // test("5. Validation number Fizzbuzz",()=>{        
    //     const explorerResult = FizzbuzzService.applyValidationInNumber(15);
    //     expect(explorerResult).toBe("FIZZBUZZ");        
    // });  
    
    // test("6. Validation number Fizz",()=>{        
    //     const explorerResult = FizzbuzzService.applyValidationInNumber(3);
    //     expect(explorerResult).toBe("FIZZ");        
    // });
    
    // test("7. Validation number buzz",()=>{        
    //     const explorerResult = FizzbuzzService.applyValidationInNumber(5);
    //     expect(explorerResult).toBe("BUZZ");        
    // });
    
    // test("8. Validation number",()=>{        
    //     const explorerResult = FizzbuzzService.applyValidationInNumber(1);
    //     expect(explorerResult).toBe(1);        
    // });
   
});





