# Requirements

- app to be multi-lingual
- primary color: #D97706
- white color: #FAFAF8

## Main Features

### MainApp features

- a landing page
- on top of landing page, user will see logo, menu with categories, search input, cart menu, user profile menu
- user has option to view website in different languages.
- on landing page user can see different sections with slider
- these sections will show different items available on the website
- landing page will also show different categories to the user
- user can click on the category and see a list of items available in the category
- on category click, user will navigate to the items list page
- on items list page, user will see list of items, and can apply filters on them, to narrow the search
- there are different filters available on the website, like: style, medium, size, price, artist etc.
- user can click to the item, to view it in more details on single item page
- or the user can click the heart icon, to add it in the list of wishlist specific to the user
- user can also directly add the item in cart, the item will then be available in user specific cart
- on single item page, user can see item images, there will be multiple images available for user
- on single item page, user can see item in more details, description, artist, and other item specific information.
- on single item page, user can also see reviews on the item, submitted by other users
- user can see artist name with the item, and can navigate to artist profile page, where all items from the artist can be seen.
- after adding items on the cart, user can navigate to the checkout page
- for checking out, user will need to login or register, user can create account with email password, or can login through facebook. on create account solve a small captcha. and user email will be verified through email verification.
- after the user logged in, user can apply valid coupon
- on the checkout page, user will see total amount, including other amounts as well, like delivery charges or other.
- user will enter shipping address, shipping address will get saved for future uses.
- after checking out, user will be able to pay through debit card/bank account or cash on delivery.
- user order will be saved in the specific user order history.
- user can see order from the order history page, user will be able to track the order status through the order history page.
- user can subscribe for newsletter.

### AdminApp Features

- admin will see a dashboard, with different data.
- admin will have different menus on the sidebar, for different features.
- admin can see list of all users, and can block any user account.
- admin can create/update/delete artists, categories, items and other useful things
- admin can see list of orders, can see order details, and update order status
- admin can create promotions, sales, promo codes etc
- admin can see all reviews submitted by the user, and can approve those reviews, approved reviews will be shown on the website only.
- admin can also add custom client diary, these will be shown on the website as well.
- admin has option, to post announcement that will be shown on every page on the website

## Specific feature details

### User account creation process

- User need an account to place an order.
- to create account user have 2 options
- option 1
  - (Login with Email, Password)
  - User can click Register link to go on the register page
  - on registration page, there will be a form with (first name, last name, email, password)
  - after filling the form, user will have to solve a captcha for verification
  - after the captcha is solved, user can click on Register button to create an account.
  - by default user email is not verified, on account creation an email with a link is sent to the user
  - user can verify the account by opening the link.
  - by using the email and password, user can login to the website
- option 2
  - (Login through facebook)
  - user can also login through facebook. in which case user info is taken from Facebook, and saved for future use

### User account management process

- user can update profile information
- change password, forgot password, change email
- user can delete account

### Adding item in wishlist process

- user can add items in wishlist, the list is specific to the user
- user need to be logged in to perform this action
- user can view the wishlist in the profile page
- user can remove items from wishlist
- user can add item in wishlist, by clicking on the heart icon, on specific item, the icon is available on single item page and item list page.

### Item list filter process

- user can filter items based on different properties.
- these filters can be found on item list page
- filters:
  - category
  - style
  - subject
  - medium
  - size
  - price
  - material
  - orientation
  - artist
- these filters will help user to narrow the search

### Item creation process

- only admins can create/edit remove items
- to create items admin can navigate to items menu on admin panel
- on the item creation form there will be a form
- form will contain, different items field
- after filling the form. admin can save the item
- item save request will be sent to the backend, where new id for the item is generated
- slug for the item is generated, and item is saved with all item fields on db.
- after that admin can edit or delete any item

### User checkout process

- user can checkout through credit/debit cards, or local bank transfer
- local bank transfer will be verified through whatsapp.
- once the payment is verified manually through whatsapp, admin through the admin panel, can update order status

### Place order process

- after user have added items in their cart, they can proceed to place order
- order can be placed by filling required order form
- user needs to be logged in, to place order
- user will select a shipping address and payment method
- there are 2 types of payment methods debit/credit cards (handled through stripe) or local bank transfer
- local bank transfer will be verified through whatsapp.
- once the payment is verified manually through whatsapp, admin through the admin panel, can update order status
- user will receive updates of order through email.
- user can track the order, once the order is shipped.
- to track the order, we will use external services like TCS tracking ID.
- order details are saved in user order history.
- shipping details are also saved for future uses.
- coupons can be applied on orders.

### Create coupon process

- coupons can be created through admin panel
- admin will create a coupon with a unique identifier
- that coupon can be applied to any order
- coupon can be of different types, like a coupon that gives, 200Rs off, or 10% off
- admin can enter start date and end date
- admin can edit/delete coupon
- in coupon admin can also set, that how many times a coupon can be used, like frequency

### Create promotion process

- promotions are like sales on website
- to create sales, admin can navigate to sales menu in admin panel
- on there admin can select from different types of sales
- the most basic sale will be, where admin will select items
- admin can select, multiple items, multiple categories, multiple artists
- admin will enter start and end date
- admin can enter sale in amount, like 200Rs off, or in percent, like 10% off
- after filling the form, admin can submit and the sale will start from that day
- admin can view/edit/delete promotions
- in promotions admin can also set, that how many times a promotion can be used, like frequency

### Client diary create process

- admin from the admin panel will have a menu to upload client diaries
- to upload client diary, admin will fill a form
- the form contains, client name, client review, item image, item name
- after filling the form, request will be sent to the backend, and save in db
- admin can edit or delete client diary

## Screens

### MainApp screens

- landing page (first page)
- item list page (show list of items, with filters)
- single item page
- artist profile page
- checkout page
- order history page
- wishlist page
- user profile page (update user profile data)

### AdminApp screen

- dashboard
- user list, user view
- item list, item create/update
- category list, category create/update
- artist list, artist create/update
- order list, order view/update status
- coupon list, coupon create/update
- promotion list, promotion create/update
- announcement list, announcement create/update
- newsletter subscriber list, create/schedule email newsletter for users.
- client diary list, client diary list create/update
