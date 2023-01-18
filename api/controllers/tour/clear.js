module.exports = {

  friendlyName: 'Clear',

  description: 'Clear current tour data.',

  inputs: {},

  exits: {
    success: {
      description: 'Cleared bar tour data',
      responseType: 'redirect'
    }
  },

  fn: async function () {

    this.req.session.tour = [];

    return '/';
  }
};
