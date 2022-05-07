const UserService = require('./../../app/services/UserService')

describe("Tests for UserService", () => {

  test("1. Create a new user using the UserService", () => {
    const user = UserService.create(1, "ricardo", "Ricardo")
    expect(user.username).toBe("ricardo")
    expect(user.name).toBe("Ricardo")
    expect(user.id).toBe(1)
    expect(user.bio).not.toBeUndefined()
  });
});