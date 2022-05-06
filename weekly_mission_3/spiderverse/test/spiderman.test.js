/*
describe("Test Suite Dummy Description", () => {
    test('Case 1 Dummy', () => {
      const resultOfSomething = 1 + 2
      expect(resultOfSomething).toBe(18);
    });
  })
*/
const Spiderman=require('./../app/spiderman.js');

describe("Unit Tests for Spiderman class", () => {
    test('Case 1: Create an Spiderman object', () => {

       // Aquí escribimos el código que queremos usar tal cuál
		// Quiero poder instanciar un objeto Spiderman con esta información
		const andrewGarfield = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony");

		// Validamos que este código funcione de la forma esperada
		expect(andrewGarfield.name).toBe("Spiderman Sony");
		expect(andrewGarfield.age).toBe(31);
		expect(andrewGarfield.actorInt).toBe("Andrew Garfield");
		expect(andrewGarfield.numPelis).toBe(2);
		expect(andrewGarfield.estudioCine).toBe("Sony");
        //Ahora si ya pasan todas las pruebas, podemos decir que el código funciona de la forma esperada
        
	});

    test('2) Use the method getInfo()', () => {
		const tomHolland = new Spiderman("Tom Holland", 25,"Spiderman Marvel", 5, "Marvel")
		expect(tomHolland.getInfo()).toBe("Tom Holland es un Spiderman, tiene 25 años, es un actor en Spiderman Marvel y ha participado en 5 películas en el estudio Marvel.")
	});



});