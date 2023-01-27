module.exports = {

  friendlyName: 'Edit view',

  description: 'Forward to edit template',

  inputs: {
    id : { type:'number', required: true },
  },

  exits: {
    notOwner: {
      description: 'User that made request is not a bar owner',
      responseType: 'redirect'
    },

    wrongOwner: {
      description: 'User that made request is owner, but for wrong bar',
      responseType: 'redirect'
    },

    success: {
      description: 'Forward with specific bar input',
      viewTemplatePath: 'bar/edit'
    }
  },

  fn: async function ({id}) {

    // Detect whether the user is allowed to view the edit page

    if (!this.req.me.isOwner) {
      return { notOwner: 'bar/' + id };
    }

    if (!this.req.me.isOwnerOf === id) {
      return { wrongOwner: 'bar/' + id };
    }

    // Get the bar to show in edit template
    let bar = await Bar.findOne(id);
    return {bar};
  }
};
