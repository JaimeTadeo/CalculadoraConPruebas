import fizzbuzz from "./fizzbuzz.js";

describe("fizzbuzz", () => {
  it("deberia generar el mismo numero si el numero no sigue ninguna regla", () => {
    expect(fizzbuzz(1)).toEqual("1");
  });
});