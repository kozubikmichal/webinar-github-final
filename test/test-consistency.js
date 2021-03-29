const assert = require("assert");
const path = require("path");

const DATA_DIR = "../data";
const TEST_DATA_DIR = "./data";

const TEST_REGEX = /^[A-Z][a-z]* [A-Z][a-z]* \(\d{4}\)$/;

const DirectoryReader = require("../src/DirectoryReader");

describe("Data consistency", function () {
	consistencyCheckFactory = (rootDirectory) => async () => {
		const reader = new DirectoryReader();

		const directories = await reader.getDataDirectories(path.join(__dirname, rootDirectory));

		directories.forEach((directory) => {
			assert.strictEqual(TEST_REGEX.test(directory), true, directory);
		});
	};

	it("All test data directories have correct name", consistencyCheckFactory(TEST_DATA_DIR));
	it("All live data directories have correct name", consistencyCheckFactory(DATA_DIR));
});