const assert = require("assert");
const path = require("path");

const DATA_DIR = "./data";

const DirectoryReader = require("../src/DirectoryReader");

describe("DirectoryReader", function () {
	describe("#getUserDirectories()", function () {
		it("should return correct test directories", async function () {
			const reader = new DirectoryReader();

			const directories = await reader.getDataDirectories(path.join(__dirname, DATA_DIR));

			assert.deepStrictEqual(directories, [
				"Foo Bar (2020)",
				"John Doe (2021)"
			]);
		});
	});
});