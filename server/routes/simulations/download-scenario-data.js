const { base } = require('../../config');

function downloadData(req, res) {
  const { id } = req.query;
  // const targetFile = path.join(simulationDir, id, 'data.zip');
  res.download(`${base}/data/${id}/data.zip`);
}

module.exports = downloadData;
