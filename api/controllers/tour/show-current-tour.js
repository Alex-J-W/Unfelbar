module.exports = {

  friendlyName: 'Show current tour',

  description: 'Shows not yet safed tour to planning customer',

  inputs: {},

  exits: {
    success: {
      description: 'Show current iteration of planned tour.',
      viewTemplatePath: 'pages/tour/create-show'
    }
  },

  fn: async function () {
    // Stores bar objects
    let barTour = [];

    for (const id of this.req.session.tour) {
      barTour.push(await Bar.findOne({id}));
    }
    return {barTour};
  }
};
