module.exports = {

  friendlyName: 'View page landing',

  description: 'Display "Landing" page with fetched bars.',

  exits: {
    success: {
      viewTemplatePath: 'pages/homepage'
    }
  },

  fn: async () => {
    let bars = await Bar.find().limit(7);
    return {bars};
  }
};
