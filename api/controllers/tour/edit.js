module.exports = {

  friendlyName: 'Edit tour name',

  description: 'Edit the name of a bar tour.',

  inputs: {
    id: { type: 'number', required: true },
    name: { type: 'string', required: true }
  },

  exits: {
    success: {
      description: 'Updated tour name',
      responseType: 'redirect'
    },
    forbiddenAcc: {
      description: 'Tried to delete unknown tour or one from other user',
      viewTemplatePath: '403'
    }
  },


  fn: async function (inputs) {

    let tour = await Bartour.findOne({id: inputs.id});

    if(this.req.me.id !== tour.customer) {
      throw { forbiddenAcc: {} };
    }

    await Bartour.updateOne({id: inputs.id}).set({
      name: inputs.name
    });

    return '/tour/show' + inputs.id;

  }


};
