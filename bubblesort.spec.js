describe("bubblesort", () => {
  beforeAll(() => {
    spyOn('swap').callThrough();
  })
  it("returns an empty array if passed an empty array", () => {
    expect(bubblesort([])).toEqual([])
  });

  it("returns the sorted array", () => {
    let unsorted = [-2, -3, 69, 420, 0];
    expect(bubblesort(unsorted)).toEqual([-3, -2, 0, 69, 420]);
  });

  it("performs as many swaps as needed to sort the array", () => {
    let unsorted = [-2, -3, 69, 420, 0];
    bubblesort(unsorted);
    expect(swap.calls.count()).toEqual(3);
  })
});
