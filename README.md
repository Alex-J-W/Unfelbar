# Unfelbar v0.5
~ by PhiLex

## What did we want to archieve
We had the idea to build a web application where a user could plan a personalized
pub crawl in Constance. Owners of bars can promote their bars and events on our platform

## How to use Unfelbar.de
### For Admins
* Admins on our page are regular users with the power to create a bar. In order
to create a bar, the admin has to fill out a form and link an existing user within the
form to the bar he creates.
  * Special admin routes:
    * Routes related to create a new bar (/bar/new)
    * Category related routes
### For Bar owners
* A bar owner is at the beginning a regular user which gets promoted to become a bar owner by an admin.
After getting connected to a bar, the owner has the ability to add items to his menu or
create events for his bar. A owner can (right now) only own one bar.
  * Special owner routes:
    * Item C(r)UD related routes
    * Event C(rud) related routes
### For regular users

## How to use
* Create a new user account or use an existing one
  * \<barname>@bar.de with pw bar for active bar owner account
    * Only Endlicht and Heimat have items set
  * tornadodavinci@user.de with pw user for user account
  * admin@unfelbar.de with pw admin for admin account
* **Only admins**
  * can promote a user to a bar owner by creating a new bar with their email address
  * can create new categories
* **Only bar owners**
  * can C(R)UD items for their bar
* **Only signed users**
  * Can create bar tours (transaction)

## Planned features
* App
  * Complete visual overhaul
  * Add all bars of Constance
  * Display tour of the month
* Users
  * ~~Option for users buy tickets for these events~~
  * Search bars by tags
  * Rate bars
* Owners
  * ~~Create events and "sell" tickets~~
  * ~~Edit their bar~~
* Bar
  * ~~Display opening hours for bars~~
  * Display description for items
