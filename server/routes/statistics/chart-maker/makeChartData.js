const fs = require('fs');
const path = require('path');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const { join } = path;

// module.exports = dir => (simulationId, chartType) => new Promise((resolve, reject) => {
//   const defaultPath = path.join(dir, simulationId);
//   const filePath = path.join(defaultPath, `${chartType}-data.json`);
//   if (!fs.existsSync(filePath)) {
//     return reject(Error('File is not exist'));
//   }
//   fs.readFile(filePath, (err, dataString) => {
//     if (err) reject(err);
//     resolve(JSON.parse(dataString));
//   });
// });

module.exports = targetDir => async (simulationId, chartType) => {
  const filePath = join(targetDir, simulationId, `${chartType}-data.json`);
  if (!fs.existsSync(filePath)) {
    throw new Error(`File is not exists ${simulationId}-${chartType}`);
  }
  return JSON.parse(await readFile(filePath));
};
