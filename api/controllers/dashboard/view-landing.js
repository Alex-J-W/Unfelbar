module.exports = {

  friendlyName: 'View page landing',

  description: 'Display "Landing" page with fetched bars.',

  exits: {
    success: {
      viewTemplatePath: 'pages/homepage'
    }
  },

  fn: async () => {
    // TODO: filter for only 6 bars
    let bars = await sails.helpers.getAllBars();
    return {bars};
  }
};
