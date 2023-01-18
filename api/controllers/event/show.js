module.exports = {

  friendlyName: 'Show even',

  description: 'Shows a single event with its attributes.',

  inputs: {
    id : { type: 'number', required: true }
  },

  exits: {
    success: {
      description: 'Show details of specific bar',
      viewTemplatePath: 'pages/event/show'
    },
    barNotFound: {
      description: 'Could not find event with this ID',
      responseType: 'redirect'
    }
  },

  fn: async function ({id}) {

    let ticket = await Barevent.findOne(id).populate("bar");

    return {ticket};
  }
};
