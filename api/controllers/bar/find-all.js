module.exports = {

  friendlyName: 'Show all bars',

  description: 'Lists all bars',

  inputs: {},

  exits: {
    success: {
      viewTemplatePath: 'pages/bar/index'
    }
  },

  fn: async () => {
    // TODO Make object with categories
    let bars = await sails.helpers.getAllBars();
    return {bars};
  }
};
