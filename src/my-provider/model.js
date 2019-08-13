function Model(koop) {}

Model.prototype.getData = function(req, callback) {
  const geojson = {
    type: "FeatureCollection",
    features: []
  };

  callback(null, geojson);
};

module.exports = Model;
