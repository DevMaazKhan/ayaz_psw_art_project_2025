# Requirements

- app to be multi-lingual

## Features

- user features
  - create account (firstName, lastName, email, password)
    - confirm user email (through email confirmation mail)
  - login (email, password) + facebook login + captcha
  - forgot password
  - change password
  - change email
  - delete account

- items management
  - add/update/delete item
  - only admin can create/update/delete items
  - item reviews

- artist profile management
  - admin can add items in artist profile
  - show all artist items on the profile

- list items
  - list items from different categories
  - view single item

- order management
  - user place order (order cycle, order status to be shown)
  - payment to be made through stripe
  - user order history
  - manage shipping for the order
  - order/user specific shipping address.
  - save shipping address for future orders.
  - stripe to be implemented to collect payment, keep stripe payment id on db, and manage order status

- item categories management
  - add/update/delete categories

- item style management
  - add/update/delete item styles

- item medium management
  - add/update/delete item mediums

- admin portal
  - show users
  - show order count
  - show items
  - show categories management
  - everything else, admin has access

## Entities

- User
  - id
  - first_name
  - last_name
  - email
  - password_hash
  - user_type
  - is_active

- UserWishlist
  - id
  - item_id
  - user_id

- Item
  - id
  - title
  - description
  - price
  - orientation
  - sale_price
  - user_id
  - category_id
  - size_id
  - medium_id
  - style_id
  - material_id

- ItemImage
  - id
  - item_id
  - image_url

- Order
  - id
  - user_id
  - total_amount
  - order_status

- OrderItem
  - id
  - order_id
  - item_id
  - category_id
  - size_id
  - medium_id
  - style_id
  - price

- Category
  - id
  - name
  - is_active

- Size
  - id
  - name
  - is_active

- Style
  - id
  - name
  - is_active

- Medium
  - id
  - name
  - is_active

- Material
  - id
  - name
  - is_active
