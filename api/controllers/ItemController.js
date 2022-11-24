const Sails = require('sails/lib/app/Sails');

// Functions that are used to interact with the 'Item' model
module.exports = {
  // Action to populate the category field when creating new 'Item'
  new: async (req, res) => {
    sails.log.debug('Find categories for new item...');
    let cats = await Category.find();
    res.view('pages/item/new', {cats});
  },

  // Action to write new 'Item' data into DB
  create: async (req, res) => {
    sails.log.debug('Create new item...');
    let params = req.allParams();
    await Item.create(params);
    res.redirect('/item/showAll');
  },

  findOne: async (req, res) => {
    sails.log.debug('Show one item...');
    let item = await Item.findOne({ id: req.params.id });
    res.view('pages/item/show', {item});
  },

  find: async (req, res) => {
    let items;
    sails.log.debug('Show all items...');
    if (req.query.q && req.query.q.length > 0) {
      items = await Item.find({
        name: {'contains': req.query.q}
      });
    } else {
      items = await Item.find();
    }
    res.view('pages/item/index', {items});
  },

  editOne: async (req, res) => {
    sails.log.debug("Edit item....");
    let item = await Item.findOne({ id: req.params.id });
    res.view('pages/item/edit', {item});
  },

  updateOne: async (req, res) => {
    sails.log.debug("Updating item....");
    let item = await Item.updateOne({ id: req.params.id }).set(req.body);
    res.redirect('/item/' + req.params.id);
  },

  destroyOne: async (req, res) => {
    await Item.destroyOne({id: req.params.id});
    res.redirect('/item/showAll');
  }
};
