module.exports = {


  friendlyName: 'Kill a stored tour',


  description: 'Removes a stored tour from the DB.',


  inputs: {
    id : { type: 'number', required: true },
  },


  exits: {
    success: {
      description: 'Successfully removed Bartour',
      responseType: 'redirect'
    },
    forbiddenAcc: {
      description: 'Tried to delete unknown tour or one from other user',
      viewTemplatePath: '403'
    }
  },


  fn: async function ({id}) {

    let tour = await Bartour.findOne(id);

    if(this.req.me.id !== tour.customer) {
      throw { forbiddenAcc: {} };
    }

      await Bartour.destroyOne({id}).fetch();

      return '/meinBereich';
  }
};
