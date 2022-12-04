module.exports = {

  friendlyName: 'Create',

  description: 'Create bar.',

  // TODO ADD ALL COLUMNS
  inputs: {
    name: { type: 'string', allowNull: false, required: true},
  },

  exits: {
    success: {
      description: 'Created new Bar',
      //Todo: On success reroute to this bar page
      viewTemplatePath: 'pages/bar/new',
    }
  },

  fn: async ({name}) => {
    await Bar.create({name});
  }
};
