module.exports = {

  friendlyName: 'Find bars',

  description: 'Finds bars with keyword',

  inputs: {
    name: { type: 'string', required: true }
  },

  exits: {
    success: {
      viewTemplatePath: 'pages/bar/index'
    }
  },

  // TODO ADD search for nothing

  fn: async ({name}) => {
    let bars = await Bar.find({
      name: {
        'contains': name
      }
    });
    return {bars};
  }
};
