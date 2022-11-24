const Sails = require('sails/lib/app/Sails');

// Functions that are used to interact with the 'Category' model
module.exports = {

  create: async (req, res) => {
    sails.log.debug('Create new bar...');
    await Bar.create(req.allParams());
    res.redirect('/bar/new');
  },

  findOne: async (req, res) => {
    sails.log.debug('Find one bar...');
    let bar = await Bar.findOne({name: req.params.name});
    res.view('/bar', {bar});
  },

  find: async (req, res) => {
  sails.log.debug('List all bar results....');
    let bars;
  if (req.query.name && req.query.name.length > 0) {
    sails.log.debug('List all bar....');
    bars = await Bar.find({
      name: {
        'contains': req.query.name
      }
    })
  } else {
    sails.log.debug('List all bar results. else...');
    bars = await Bar.find();
  }
  res.view ('pages/bar/index', { bars } );
},

  findLanding: async (req, res) => {
    sails.log.debug('Find top bars...');
    let bars = await Bar.find().limit(6);
    res.view('pages/homepage', {bars});
  },

  show: async  (req, res) => {
    sails.log.debug('Show all bars...');
    let bars = await Bar.find().limit(6);
    res.view('pages/bar/index', {bars});
  }
};
