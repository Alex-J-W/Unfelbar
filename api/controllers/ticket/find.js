module.exports = {


  friendlyName: 'Find',


  description: 'Find ticket.',


  inputs: {
    id: { type: 'number', required: true },
  },


  exits: {

  },


  fn: async function ({id}) {

    let ticket = await Barevent.findOne(id).populate("bar");

    return {ticket};
  }
};
