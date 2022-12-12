const {request} = require('sails/lib/app/configuration/default-hooks');
module.exports = {

  friendlyName: 'New bar 1',

  description: 'Show first view to create a new bar.',

  inputs: {},

  exits: {
    success: {
      viewTemplatePath: 'pages/bar/new'
    },
  },

  fn: async () => {}
};
