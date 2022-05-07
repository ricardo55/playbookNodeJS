const User = require('./../../app/models/user');

describe("Unit Tests for User class", () => {

    test('1) Create an User object', () => {
        //Aqui se inoca el codigo a usar en la app
        const user = new User(1, "ricardo", "Ricardo", "Bio","dateCreated","lastCreated");

        // Aqui se valida los resultados del codigo
        // Esta es una comparacion que va a igualar el valor de la izquierda con el valor de la derecha(valor esperado)

            expect(user.id).toBe(1);
            expect(user.username).toBe("ricardo");
            expect(user.name).toBe("Ricardo");
            expect(user.bio).toBe("Bio");
            expect(user.dateCreated).toBe("dateCreated");
            expect(user.lastUpdated).toBe("lastCreated");
        });
    });