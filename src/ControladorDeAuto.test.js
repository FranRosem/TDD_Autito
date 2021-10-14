import * as f from "./App";

describe("Autito ", () => {
    it("Debería devolver la posición del auto", () => {
        expect(f.createCoordinates("5,5")).toEqual([5, 5]);
    });
    it("Debería devolver una posición default si la información de la posición es vacía", () => {
        expect(f.createCoordinates("")).toEqual([0, 0]);
    });
    it("Debería devolver la dirección del auto", () => {
        expect(f.carDirection("5,5N")).toEqual("N");
    });
    it("Debería devolver la dirección default hacia el Norte si la información de la dirección es vacía", () => {
        expect(f.carDirection("5,5")).toEqual("N");
    });
    it("Debería crear la pista de inicio del auto", () => {
        /*
        expect(f.createRoad("5,5/1,2N/IIIAAIAIA")[0]).toEqual([5,5]);
        expect(f.createRoad("5,5/1,2N/IIIAAIAIA")[1]).toEqual([1,2]);
        expect(f.createRoad("5,5/1,2N/IIIAAIAIA")[2]).toEqual("N");
        expect(f.createRoad("5,5/1,2N/IIIAAIAIA")[3]).toEqual("IIIAAIAIA");
        */
        expect(f.createRoad("5,5/1,2N/IIIAAIAIA")).toEqual([[5,5],[1,2],"N","IIIAAIAIA"]);
    });
    
});