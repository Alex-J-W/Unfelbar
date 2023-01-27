module.exports = {

  friendlyName: 'Find bars',

  description: 'Finds bars with name fragment',

  inputs: {
    name: { type: 'string', required: true }
  },

  exits: {
    success: {
      viewTemplatePath: 'pages/bar/index'
    }
  },

  fn: async ({name}) => {
    let bars = await Bar.find({
      name: {
        'contains': name
      }
    });
    return {bars};
  }
};
