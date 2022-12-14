module.exports = {

  friendlyName: 'Edit',

  description: 'Edit a specific bar.',

  inputs: {
    id: { type: 'number', required: true },
  },

  exits: {
    success: {
      description: 'Bar edited successfully',
      viewTemplatePath: 'pages/bar/edit'
    }
  },

  fn: async function ({id}) {

    let bar = await Bar.find(id);

    return {id};
  }
};
