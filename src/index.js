const path = require("path");
const DATA_DIR = "../data";

const DirectoryReader = require("./DirectoryReader");
const reader = new DirectoryReader();

(async () => {
	const directories = await reader.getDataDirectories(path.join(__dirname, DATA_DIR));

	console.log(directories.join("\n"));
})();