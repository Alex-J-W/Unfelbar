const Sails = require('sails/lib/app/Sails');

// Functions that are used to interact with the 'Category' model
module.exports = {
  create: async (req, res) => {
    sails.log.debug('Creating new category...');
    let cat = await Category.create(req.allParams());
    res.redirect('/category/index');
  },

  // Action that is called when routing to /category/index that gets cat data and results in view
  find: async (req, res) => {
    sails.log.debug('Finding all categories...');
    let cats = await Category.find();
    res.view('pages/category/index', {cats});
  },

  destroyOne: async (req, res) => {
    sails.log.debug('Destroy category...');
    await Category.destroyOne({id : req.params.id});
    res.redirect('/category/index');
  }

};
