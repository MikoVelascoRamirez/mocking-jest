describe("Suite tests to an easy example of mocking", () => {
    
    it("1. Verifying if created mock name is mockCalledBack", () => {
        const mockCalledBack = jest.fn();
        expect(mockCalledBack.getMockName()).toBe("jest.fn()");
    });

    it("2. Verifying if a mock created has called at least once", () => {
        const mockCalledBack2 = jest.fn((x,y,z) => (x*z)+y);
        mockCalledBack2(2,5,6);
        mockCalledBack2(3,4,9);

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
});