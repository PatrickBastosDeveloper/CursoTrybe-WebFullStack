const removeBebida = require("./removeSabor");

describe("Remove sabor de bebida", () => {
  it("Remove água", () => {
    const bebidas = [
      "coca-cola",
      "sukita",
      "água",
      "garapa",
      "suco de laranja",
      "groselha",
    ];
    expect([
      "coca-cola",
      "sukita",
      "garapa",
      "suco de laranja",
      "groselha",
    ]).toEqual(removeBebida(bebidas, "água"));
  });
  it("Remove garapa", () => {
    const bebidas = [
      "coca-cola",
      "sukita",
      "água",
      "garapa",
      "suco de laranja",
      "groselha",
    ];
    expect([
      "coca-cola",
      "sukita",
      "água",
      "suco de laranja",
      "groselha",
    ]).toEqual(removeBebida(bebidas, "garapa"));
  });
  it("Remove groselha caso exista", () => {
    const bebidas = [
        "coca-cola",
        "sukita",
        "água",
        "garapa",
        "suco de laranja",
        "groselha",
      ];
    // expect(removeBebida(bebidas, 'groselha')).toContain('água');
    //ou
    expect(removeBebida(bebidas, 'groselha')).not.toContain('groselha');
  });
});
