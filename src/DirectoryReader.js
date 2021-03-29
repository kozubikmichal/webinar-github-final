const fs = require("fs");

class DirectoryReader {
	constructor() {}

	async getDataFiles(root) {
		const allEntries = await fs.promises.readdir(root, {
			withFileTypes: true
		});

		return allEntries
			.filter((dirent) => !dirent.isDirectory())
			.filter((dirent) => !dirent.name.startsWith("."))
			.map((dirent) => dirent.name);
	}
}

module.exports = DirectoryReader;