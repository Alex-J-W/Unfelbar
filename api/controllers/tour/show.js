module.exports = {

  friendlyName: 'Show bar tour',

  description: 'Show tour from user with specific id.',

  inputs: {
    id: { type: 'number', required: true },
  },

  exits: {
    success: {
      description: 'Tour found, display now',
      viewTemplatePath: 'pages/tour/show'
    },
    notOwnerOfTour: {
      responseType: 'redirect'
    }
  },

  fn: async function ({id}) {

    let tour = await Bartour.findOne(id).populate('barList');

    // Only tour owners can see their own tour
    if (!tour.customer === this.req.me.id){
      throw { notOwnerOfTour: '/' };
    }

    let tourData = {
      id: tour.id,
      name: tour.name,
      bars: tour.barList,
    };

    return {tourData};
  }
};
