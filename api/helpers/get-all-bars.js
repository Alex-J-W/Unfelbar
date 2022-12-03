module.exports = {

  friendlyName: 'Get all bars',

  description: 'Fetches all available bars from DB',

  inputs: {},

  fn: async () => {
    // Return all bars that are stored in the DB
    let bars = await Bar.find();

    // Return bars to functioned that called the helper to further processing
    return bars;
  }
};
