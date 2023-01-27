module.exports = {

  friendlyName: 'Edit',

  description: 'Edit a specific bar.',

  inputs: {
    id: { type: 'number', required: true },
    openingHours: { type: 'string', required: true },
    description: { type: 'string', required: true },
    address: { type: 'string', required: true }
  },

  exits: {
    success: {
      description: 'Bar edited successfully',
      responseType: 'redirect'
    }
  },

  fn: async function (inputs) {

    let id = await Bar.updateOne({id: inputs.id}).set({
      openingHours: inputs.openingHours,
      description: inputs.description,
      address: inputs.address
    });

    return '/bar/' + id;
  }
};
