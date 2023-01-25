/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝

  // Default routes by Sails
  'GET /':                   { action: 'dashboard/view-landing' },
  'GET /about':              { action: 'dashboard/view-about' },

  'GET /legal/terms':        { action: 'legal/view-terms' },
  'GET /legal/privacy':      { action: 'legal/view-privacy' },
  'GET /contact':            { action: 'view-contact' },

  'GET /signup':             { action: 'entrance/view-signup' },
  'GET /email/confirm':      { action: 'entrance/confirm-email' },
  'GET /email/confirmed':    { action: 'entrance/view-confirmed-email' },

  'GET /login':              { action: 'entrance/view-login' },
  'GET /password/forgot':    { action: 'entrance/view-forgot-password' },
  'GET /password/new':       { action: 'entrance/view-new-password' },

  'GET /account':            { action: 'account/view-account-overview' },
  'GET /account/password':   { action: 'account/view-edit-password' },
  'GET /account/profile':    { action: 'account/view-edit-profile' },

  //  ╔╦╗╦╔═╗╔═╗  ╦═╗╔═╗╔╦╗╦╦═╗╔═╗╔═╗╔╦╗╔═╗   ┬   ╔╦╗╔═╗╦ ╦╔╗╔╦  ╔═╗╔═╗╔╦╗╔═╗
  //  ║║║║╚═╗║    ╠╦╝║╣  ║║║╠╦╝║╣ ║   ║ ╚═╗  ┌┼─   ║║║ ║║║║║║║║  ║ ║╠═╣ ║║╚═╗
  //  ╩ ╩╩╚═╝╚═╝  ╩╚═╚═╝═╩╝╩╩╚═╚═╝╚═╝ ╩ ╚═╝  └┘   ═╩╝╚═╝╚╩╝╝╚╝╩═╝╚═╝╩ ╩═╩╝╚═╝
  '/terms':                   '/legal/terms',
  '/logout':                  '/api/v1/account/logout',

  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝

  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝
  // Note that, in this app, these API endpoints may be accessed using the `Cloud.*()` methods
  // from the Parasails library, or by using those method names as the `action` in <ajax-form>.
  '/api/v1/account/logout':                              { action: 'account/logout' },
  'PUT   /api/v1/account/update-password':               { action: 'account/update-password' },
  'PUT   /api/v1/account/update-profile':                { action: 'account/update-profile' },
  'PUT   /api/v1/account/update-billing-card':           { action: 'account/update-billing-card' },
  'PUT   /api/v1/entrance/login':                        { action: 'entrance/login' },
  'POST  /api/v1/entrance/signup':                       { action: 'entrance/signup' },
  'POST  /api/v1/entrance/send-password-recovery-email': { action: 'entrance/send-password-recovery-email' },
  'POST  /api/v1/entrance/update-password-and-login':    { action: 'entrance/update-password-and-login' },
  'POST  /api/v1/deliver-contact-form-message':          { action: 'deliver-contact-form-message' },
  'POST  /api/v1/observe-my-session':                    { action: 'observe-my-session', hasSocketFeatures: true },

  //  ╦ ╦╔╗╔═╦═╔═╗╦  ╔╗ ╔═╗╦═╗
  //  ║ ║║║║╞╬╡║╣ ║  ╠╩╗╠═╣╠╦╝
  //  ╚═╝╝╚╝ ╩ ╚═╝╩═╝╚═╝╩ ╩╩╚═
  // Routes created by PhiLex

  // Routes for first transaction with both views
  'GET /bar/new':            { action: 'bar/create-view' },
  'POST /bar/new':           { action: 'bar/create' },
  'GET /bar/new-2':          { action: 'bar/create-view-2' },
  'POST /bar/new-2':         { action: 'bar/create-2' },

  // Routes to handle bar related actions
  'GET /bar/:id/edit':       { action: 'bar/edit' },
  'GET /bars' :              { action: 'bar/find-all' },
  'GET /search':             { action: 'bar/find-by-name' },
  'GET /bar/:id':            { action: 'bar/show'},
  'GET /bar/:id/items':      { action: 'item/find-all' },

  // Routes to handle categories - Categories are needed to map items to in a menu for a bar
  'GET /category/new':       { action: 'admin/category/create-view' },
  'POST /category/new':      { action: 'admin/category/create' },
  'GET /category/index':     { action: 'admin/category/find' },
  'GET /category/kill/:id':  { action: 'admin/category/delete' },

  // Routes to handle menu items - Each bar owner can add own unique items to his/her bar
  'GET /item/new':           { action: 'item/create-view' },
  'POST /item/new':          { action: 'item/create' },
  'GET /item/edit/:id':      { action: 'item/edit-view' },
  'POST /item/edit/:id':     { action: 'item/edit' },
  'GET /item/kill/:id':      { action: 'item/delete' },
  'GET /item/:id':           { action: 'item/show' },

  // Routes to create an event - an event (Barevent) is unique to a single bar and can be created by owner
  'GET /event/new':          { action: 'event/create-view' },
  'POST /event/new':         { action: 'event/create' },
  'GET /event/:id/edit':     { action: 'event/edit-view' },
  'GET /event/:id':          { action: 'event/show' },

  // Routes to handle tour - Users can add an arbitrary amount of bars in random order to their unique bar tour
  'GET /tour/add/:id':       { action: 'tour/add'},
  'GET /tour/remove/:id':    { action: 'tour/remove-position' },
  'Get /tour/plan':          { action: 'tour/show-current-tour' },
  'GET /tour/create':        { action: 'tour/create' },
  'GET /tour/clear':         { action: 'tour/clear' },
  'GET /tour/show/:id':      { action: 'tour/show' },

  // Only german route? TODO
  'GET /meinBereich':        { action: 'area/show' },

  // ╦ ╦╔╗╔═╦═╔═╗╦  ╔╗ ╔═╗╦═╗  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  // ║ ║║║║╞╬╡║╣ ║  ╠╩╗╠═╣╠╦╝  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  // ╚═╝╝╚╝ ╩ ╚═╝╩═╝╚═╝╩ ╩╩╚═  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝

  'GET  /api/v1/ticket/find/:id':                        { action: 'ticket/find' },
  'POST /api/v1/ticket/create':                          { action: 'ticket/create' },
  'POST /api/v1/event/update-tickets':                   { action: 'event/update-tickets' },
};
