parasails.registerPage("ticketapp", {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝


  data: {

    barEvent: {},
    ticketsLeft: null,
    currentTicketCount: 0,
    currentPrice: 0,

    ticketsSelected: false,
    insured: false,
    insurePrice: 10,

    transactionSucc:  false,

  },

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═

  // TODO: think whats needed here
  mounted: async function (){

  },
  beforeMount: async function (){

    this.barEvent = await this.getTicket(window.origin + '/api/v1/ticket/find/' + parseInt($('#bar').text()));;
    this.ticketsLeft = this.barEvent.ticketVolume - this.barEvent.ticketsSold;
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {

    getTicket: async function (url) {

      let barEvent;

      await fetch(url)
        .then(res => res.json())
        .then(function (data){
          barEvent = data.ticket;
        });

      console.log("getTicket result", barEvent);
      return barEvent;
    },
    incTicket: function () {
      // Cannot go buy more tickets than available
      if(this.currentTicketCount < this.ticketsLeft){
        this.currentTicketCount++;
        this.calcPrice();
      }
    },
    decTicket: function () {
      // Cannot go below 0 Tickets
      if (this.currentTicketCount > 0){
        this.currentTicketCount--;
        this.calcPrice();
      }
    },
    calcPrice: function (){
      this.currentPrice = this.barEvent.price * this.currentTicketCount;
    },
    click: function (){
      if(this.currentTicketCount > 0){
        this.ticketsSelected = true;
      }
      },
    ticketProceed: function (){},
    submitTickets: function (){

      // Calculate first "unused" ticket number
      let ticketNumber = this.barEvent.ticketsSold + 1;

      // Loops over each bought ticket to write it into DB
      for (let i = 0; i < this.currentTicketCount; i++){

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
          return fetch(window.origin + '/api/v1/ticket/create',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body
          });
        };

        postForm(body)
          .then(res =>  console.log("Created new ticket", res));

        ticketNumber++;
      }

      this.updateBareventModel(this.currentTicketCount)
        .then(res => console.log(res));

      // TODO: DO this only if call was susccess
      this.ticketsSelected = false;
      this.insured = false;
      this.transactionSucc = true;
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
        return fetch(window.origin + '/api/v1/event/update-tickets',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body
        });
      };

      postForm(body)
        .then(res =>  console.log("Updated Barevent ticketsSold", res));
    }
  },
});
