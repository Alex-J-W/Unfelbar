parasails.registerPage('ticketapp', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝


  data: {

    // Variables to show elements
    isNew: true,
    ticketsSelected: false,
    insured: false,
    showFinal: false,
    isLoading: false,
    transactionSucc: false,

    // Variables that calculate pricing
    barEvent: {},
    ticketsLeft: null,
    currentTicketCount: 0,
    currentPrice: 0,
    insurePrice: 10,
  },

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═

  mounted: async function () {

  },
  beforeMount: async function () {

    this.barEvent = await this.getTicket(window.origin + '/api/v1/ticket/find/' + parseInt($('#bar').text()));

    this.ticketsLeft = this.barEvent.ticketVolume - this.barEvent.ticketsSold;
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {

    // Ajax call here
    getTicket: async function (url) {

      let barEvent;

      await fetch(url)
        .then(res => res.json())
        .then(function (data) {
          barEvent = data.ticket;
        });
      return barEvent;
    },

    // Increment ticket count and calculate price
    incTicket: function () {
      // Cannot go buy more tickets than available
      if (this.currentTicketCount < this.ticketsLeft) {
        this.currentTicketCount++;
        this.calcPrice();
      }
    },

    // Decrement ticket count and calculate price
    decTicket: function () {
      // Cannot go below 0 Tickets
      if (this.currentTicketCount > 0) {
        this.currentTicketCount--;
        this.calcPrice();
      }
    },

    // Calculate current price based on selected values
    calcPrice: function () {

      if (this.insured) {
        this.currentPrice = this.barEvent.price * this.currentTicketCount + this.currentTicketCount * this.insurePrice;
      } else {
        this.currentPrice = this.barEvent.price * this.currentTicketCount;
      }
    },


    click: function () {
      if (this.currentTicketCount > 0) {
        this.ticketsSelected = true;
      }
    },


    isInsured: function () {

      let button = $('#insure');

      if (!this.insured) {
        this.insured = true;
        button.removeClass("text-danger");
        button.addClass(".text-success");
      } else {
        this.insured = false;
        button.removeClass(".text-success");
        button.addClass("text-danger");
      }
      this.calcPrice();
    },

    showPrice: function () {
      this.showFinal = true;

    },
    ticketProceed: function () {
    },
    submitTickets: async function () {

      // Calculate first "unused" ticket number
      let ticketNumber = this.barEvent.ticketsSold + 1;

      // Loops over each bought ticket to write it into DB
      for (let i = 0; i < this.currentTicketCount; i++) {

        // Build data object for database that is send to controller via api
        const formData = {
          number: ticketNumber,
          barEvent: this.barEvent.id,
          customer: window.SAILS_LOCALS.id,
          _csrf: window.SAILS_LOCALS._csrf,
        };

        const body = JSON.stringify(formData);

        // Create function that calls given route with said body
        const postForm = (body) => {
          return fetch(window.origin + '/api/v1/ticket/create', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body
          });
        };

        postForm(body)
          .then(res => console.log('Created new ticket', res));

        ticketNumber++;
      }

      await this.updateBareventModel(this.currentTicketCount)
        .then(res => console.log(res));

      this.isNew = false;
      this.ticketsSelected = false;
      this.showFinal = false;
      this.isLoading = true;

      setTimeout(function (){
        this.isLoading = false;
        this.transactionSucc = true;
      }.bind(this),3000);


    },
    updateBareventModel: async function (amountTicketsBought) {

      const formData = {
        amountTicketsBought,
        barEvent: this.barEvent.id,
        _csrf: window.SAILS_LOCALS._csrf,
      };

      const body = JSON.stringify(formData);

      // Create function that calls given route with said body
      const postForm = (body) => {
        return fetch(window.origin + '/api/v1/event/update-tickets', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body
        });
      };

      postForm(body)
        .then(res => console.log("Updated Barevent ticketsSold", res));
    }
  },
});
