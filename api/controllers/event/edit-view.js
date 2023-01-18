module.exports = {

  friendlyName: 'Edit',

  description: 'Edit a specific event.',

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

    let eventData = await Barevent.find(id);

    return {eventData};
  }
};
