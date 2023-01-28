module.exports = {

  friendlyName: 'Show currently planned tour',

  description: 'Shows not yet stored tour to planning customer',

  inputs: {},

  exits: {
    success: {
      description: 'Show current iteration of planned tour.',
      viewTemplatePath: 'pages/tour/planning'
    },

    noTourPlanned: {
      description: 'There is no tour stored in the session, return home',
      responseType: 'redirect'
    }
  },

  fn: async function () {

    // No tour item is in the session, return. Since the link to this action is only visible if a customer
    // has an item in the session, this check covers for malicious link testing
    if(this.req.session.tour.length === 0){
      throw { noTourPlanned: 'back' };
    }

    // Stores bar objects
    let barTour = [];

    // Gets complete Bar objects to present them in the tour overview
    for (const id of this.req.session.tour) {
      barTour.push(await Bar.findOne({id}));
    }

    return {barTour};
  }
};
