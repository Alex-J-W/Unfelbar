/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  // Per default: Lock all routes for every user but admin
  '*': 'is-super-admin',

  // Bypass the `is-logged-in` policy for:
  'entrance/*': true,
  'account/logout': true,
  'account/view-account-overview': 'is-logged-in',
  'view-homepage-or-redirect': true,
  'view-faq': 'is-super-admin',
  'view-contact': true,
  'legal/view-terms': true,
  'legal/view-privacy': true,
  'deliver-contact-form-message': true,

  // Custom policies for actions
  'dashboard/*': true,


  //  ╦ ╦╔╗╔═╦═╔═╗╦  ╔╗ ╔═╗╦═╗
  //  ║ ║║║║╞╬╡║╣ ║  ╠╩╗╠═╣╠╦╝
  //  ╚═╝╝╚╝ ╩ ╚═╝╩═╝╚═╝╩ ╩╩╚═
  // Policies created by PhiLex
  // is-super-admin is already default, just for the sake of completeness stated

  'bar/create-view':                'is-super-admin',
  'bar/create':                     'is-super-admin',
  'bar/create-view-2':              'is-super-admin',
  'bar/create-2':                   'is-super-admin',
  'bar/edit-view':                  'is-owner',
  'bar/edit':                       'is-owner',
  'bar/find-all':                   true,
  'bar/find-by-name':               true,
  'bar/show':                       true,
  //-------------------------------------------------------------------

  'admin/category/create-view':     'is-super-admin',
  'admin/category/create':          'is-super-admin',
  'admin/category/edit-view':       'is-super-admin',
  'admin/category/edit':            'is-super-admin',
  'admin/category/delete':            'is-super-admin',
  'admin/category/find':            'is-owner-or-admin',
  'admin/panel-view':               'is-super-admin',
  //-------------------------------------------------------------------

  'item/create-view':               'is-owner',
  'item/create':                    'is-owner',
  'item/edit-view':                 'is-owner',
  'item/edit':                      'is-owner',
  'item/delete':                    'is-owner',
  'item/show':                      'is-owner',
  'item/find-all':                  true,
  //-------------------------------------------------------------------

  'event/create-view':              'is-owner',
  'event/create':                   'is-owner',
  'event/edit-view':                'is-owner',
  'event/show':                     true,
  'event/update-tickets':           'is-logged-in',
  //-------------------------------------------------------------------

  'tour/add':                       'is-logged-in',
  'tour/remove-position':           'is-logged-in',
  'tour/show-current-tour':         'is-logged-in',
  'tour/create':                    'is-logged-in',
  'tour/edit':                      'is-logged-in',
  'tour/delete':                    'is-logged-in',
  'tour/show':                      'is-logged-in',
  //-------------------------------------------------------------------

  'area/show':                      'is-logged-in',
  //-------------------------------------------------------------------

  'ticket/find':                    true,
  'ticket/create':                  'is-logged-in',
};
