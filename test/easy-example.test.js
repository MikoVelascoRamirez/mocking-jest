describe("Suite tests to an easy example of mocking", () => {
    
    it("1. Verifying if created mock name is mockCalledBack", () => {
        const mockCalledBack = jest.fn();
        expect(mockCalledBack.getMockName()).toBe("jest.fn()");
    });
});