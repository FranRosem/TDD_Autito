import * as f from "./App";

describe("Autito ", () => {
    it("Debería devolver la posición del auto", () => {
        expect(f.getPosition("5,5")).toEqual("5,5");
    });
    it("Debería devolver una posición default si la información de la posición es vacía", () => {
        expect(f.getPosition("")).toEqual("0,0");
    });
});