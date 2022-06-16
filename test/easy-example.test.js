describe("Suite tests to an easy example of mocking", () => {
    
    it("1. Verifying if created mock name is mockCalledBack", () => {
        const mockCalledBack = jest.fn();
        expect(mockCalledBack.getMockName()).toBe("jest.fn()");
    });

    it("2. Verifying if a mock created has called at least once", () => {
        const mockCalledBack2 = jest.fn((x,y,z) => (x*z)+y);
        mockCalledBack2(2,5,6);
        mockCalledBack2(3,4,9);
        mockCalledBack2();

        console.log(mockCalledBack2.mock.results);

        /*
            Arreglo con llamadas al mock, la cual lucirá así:
            [
                [...args] <- primera llamada
                [...args] <- segunda llamada
                ...
                ...
                [...args] <- última llamada
            ]
        */
        expect(mockCalledBack2.mock.calls.length).toBe(1);
    })

    it("3. Verifying if the values returned are the correct", () => {
        const mockCalledBack3 = jest.fn(name => {
            const splited =  name.split("");
            return splited[0] + splited[splited.length-1];
        })

        mockCalledBack3("Miguelito")
        mockCalledBack3("Elizabeth")
        mockCalledBack3("Zaira")

        expect(mockCalledBack3.mock.results[0].value).toBe("Mo")
        expect(mockCalledBack3.mock.results[1].value).toBe("Eh")
        expect(mockCalledBack3.mock.results[2].value).toBe("Za")
    });
});