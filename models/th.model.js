const THService = require("../services/th.service");
module.exports = {
  add: async (thObject) => {
    status = 0;
    await THService.create(thObject, (err, doc) => {
      status = err ? 0 : 1;
    });

    return status;
  },
  get: async (id) => {
    var query = THService.find({ id: id }, null, { limit: 100, sort: { date: -1 } });
    const THData = await query.exec();
    return THData;
  },
  getTop: async (id) =>{
    var query = THService.findOne({ id: id }, null, { limit: 1, sort: { date: -1 } });
    const THData = await query.exec();
    return THData;
  }
};
