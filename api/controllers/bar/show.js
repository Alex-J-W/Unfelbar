module.exports = {

  friendlyName: 'Show bar',

  description: 'Shows a single bar with its attributes.',

  inputs: {
    id : { type: 'number', required: true }
  },

  exits: {
    success: {
      description: 'Show details of specific bar',
      viewTemplatePath: 'pages/bar/show'
    },

    barNotFound: {
      description: 'Could not find bar with this ID',
      responseType: 'redirect'
    }
  },

  fn: async ({id}) => {

    let bar = await Bar.findOne(id);

    if(!bar){
      throw { barNotFound: '/bars'};
    }

    let barEvents = await Barevent.find({bar : bar.id, date: { '>=' : new Date()}});

    let barevents = [];
    barEvents.forEach((e) => barevents.push(e));

    barevents.sort(function (a, b) {
      let dateA = new Date(a.date);
      let dateB = new Date(b.date);

      // Compare the 2 dates
      if (dateA < dateB) { return -1; }
      if (dateA > dateB) { return 1; }
      return 0;
    });

    return {bar, barevents};
  }
};
