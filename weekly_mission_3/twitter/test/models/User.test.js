const User = require('./../../app/models/user');

describe("Unit Tests for User class", () => {

    test('1) Create an User object', () => {
        //Aqui se inoca el codigo a usar en la app
        // const user = new User(1, "ricardo", "Ricardo", "Bio","dateCreated","lastCreated");

        // Modificando la prueba de unidad cambiando los valores de las fechas
        const user = new User(1, "ricardo", "Ricardo", "Bio");

        // Aqui se valida los resultados del codigo
        // Esta es una comparacion que va a igualar el valor de la izquierda con el valor de la derecha(valor esperado)

            expect(user.id).toBe(1);
            expect(user.username).toBe("ricardo");
            expect(user.name).toBe("Ricardo");
            expect(user.bio).toBe("Bio");
            // expect(user.dateCreated).toBe("dateCreated");
            // expect(user.lastUpdated).toBe("lastCreated");

            // Verifica que el valor no sea undefined
            expect(user.dateCreated).not.toBeUndefined();
            expect(user.lastUpdated).not.toBeUndefined();
        });

        test('2) Add getters', () => {
            const user = new User(1, "ricardo", "Ricardo", "Bio")
            expect(user.getUsername).toBe("ricardo")
            expect(user.getBio).toBe("Bio")
            expect(user.getDateCreated).not.toBeUndefined()
            expect(user.getLastUpdated).not.toBeUndefined()
            });
    });