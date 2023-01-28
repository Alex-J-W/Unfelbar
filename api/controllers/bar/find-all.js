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
    let bars = await Bar.find();
    return {bars};
  }
};
