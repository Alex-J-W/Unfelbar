const Sails = require('sails/lib/app/Sails');

module.exports = {

  friendlyName: 'Create new bar step 2',

  description: 'Create a new bar.',

  inputs: {
    // Coming from session
  },

  exits: {
    success: {
      viewTemplatePath: 'pages/bar/show'
    },

    fileNotUploaded:{
      responseType: 'redirect'
    }
  },

  fn: async function ({file}) {

    const session = this.req.session;

    const path = require('path');
    const params = {
      dirname: path.resolve(sails.config.appPath, 'assets/images/bars/')
    };

    let callback = async (err, uploadedFiles) => {
      if (err) {
        return { fileNotUploaded: '/bar/new' };
      } else {
        sails.log("Uploaded!");
      }

      let fname = path.basename(uploadedFiles[0].fd);

      await Bar.create({
        'name': session.barCreate.name,
        'address': session.barCreate.address,
        'description': session.barCreate.description,
        'openingHours': session.barCreate.openingHours,
        'picture': fname,
        'owner': session.barCreate.owner,
        'starRating': session.barCreate.starRating
      });
    };

    await this.req.file('image').upload(params, callback);

    let bar = await Bar.find({owner: session.owner});

    return {bar};
  }
};
