const assert = require("assert");
const path = require("path");

const DATA_DIR = "./data";

const DirectoryReader = require("../src/DirectoryReader");

describe("DirectoryReader", function () {
	describe("#getUserDirectories()", function () {
		it("should return correct test directories", async function () {
			const reader = new DirectoryReader();

			const files = await reader.getDataFiles(path.join(__dirname, DATA_DIR));

			assert.deepStrictEqual(files, [
				"Foo Bar (2020).json",
				"John Doe (2021).json"
			]);
		});
	});
});