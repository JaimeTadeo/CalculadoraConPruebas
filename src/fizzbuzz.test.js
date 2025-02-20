import fizzbuzz from "./fizzbuzz.js";

describe("fizzbuzz", () => {
  it("deberia generar el mismo numero si el numero no sigue ninguna regla", () => {
    expect(fizzbuzz(1)).toEqual("1");
  });

  it("deberia generar el mismo numero si el numero no sigue ninguna regla", () => {
    expect(fizzbuzz(22)).toEqual("22");
  });

  it("debería devolver 'Fizz' si el numero es divisible por 3", () => {
    expect(fizzbuzz(3)).toEqual("Fizz");
  });

  it("debería devolver 'Fizz' si el numero es divisible por 3", () => {
    expect(fizzbuzz(33)).toEqual("Fizz");
  });

  it("debería devolver 'Fizz' si el numero es divisible por 5", () => {
    expect(fizzbuzz(0)).toEqual("Buzz");
  });

  it("debería devolver 'Fizz' si el numero es divisible por 5", () => {
    expect(fizzbuzz(50)).toEqual("Buzz");
  });
});

