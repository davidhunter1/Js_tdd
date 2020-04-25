const getContent = require("./index");
it("returns the weather of montreal", async () => {
  const weather = await getContent("weather");
  expect(typeof weather).toBe("number");
});
it("returns a useless fact", async () => {
	const fact = await getContent("fact");
	expect(typeof fact).toBe("string");
  });