module.exports = {

  friendlyName: 'Create new bar step 1',

  description: 'Create a new bar.',

  inputs: {
    name: { type: 'string', required: true},
    owner: {type: 'string', required: true},
    address: { type: 'string', required: true},
    description: { type: 'string', required: true},
    openingHours: { type: 'string', required: true},
  },

  exits: {
    success: {
      description: 'Created new Bar',
      responseType: 'redirect'
    },
    userNotFound:{
      description: 'No user with given email was found',
      responseType: 'redirect'
    }
  },

  fn: async function (inputs) {

    const session = this.req.session;
    this.req.session.barCreate = {};

    let owner = await User.findOne({ emailAddress: inputs.owner });

    if (!owner){
      throw { userNotFound: '/bar/new' };
    }

    // Store values in session
    session.barCreate.name = inputs.name;
    session.barCreate.address = inputs.address;
    session.barCreate.description = inputs.description;
    session.barCreate.openingHours = inputs.openingHours;
    session.barCreate.owner = owner.id;
    session.barCreate.starRating = null;

    return '/bar/new-2';
  }
};
