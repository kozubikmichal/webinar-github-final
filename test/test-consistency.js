const assert = require("assert");
const path = require("path");

const DATA_DIR = "../data";
const TEST_DATA_DIR = "./data";

const TEST_REGEX = /^[A-Z][a-z]* [A-Z][a-z]* \(\d{4}\)\.json$/;

const DirectoryReader = require("../src/DirectoryReader");

describe("Data consistency", function () {
	consistencyCheckFactory = (rootDirectory) => async () => {
		const reader = new DirectoryReader();

		const files = await reader.getDataFiles(path.join(__dirname, rootDirectory));

		files.forEach((file) => {
			assert.strictEqual(TEST_REGEX.test(file), true, file);
		});
	};

	it("All test data have correct name", consistencyCheckFactory(TEST_DATA_DIR));
	it("All live data have correct name", consistencyCheckFactory(DATA_DIR));
});