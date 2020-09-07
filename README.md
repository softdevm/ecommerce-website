## Ecommerce website

My thought process

#### 1. Features
  - __Unauthenticated users__
    * view product pages
    * search for products
    * add to shopping cart
    * login
    * register
  - __Authenticated users__
    * all unauthenticated user's features
    * order (available only when shopping cart is not empty)
    * after products are received can leave a comment and a review (through
      email)
    * wishlist (products that the user wants to track for later purchase)
  - __Admin__
    * django admin page

#### 2. Database structure
  - __User__
    * username: varchar
    * email: varchar
    * password: varchar
    * name: varchar
    * address: varchar
    * phone: int
  - __Product__
    * name: varchar
    * description: varchar
    * price: double
    * discount: int (percentage)
    * images
  - __Cart__
    * user_id: int
    * product_id: int
  - __Order__
    * user_id: int
    * product_id: int
  - __Review__
    * user_id: int
    * product_id: int
    * stars: int
  - __Comment__
    * user_id: int
    * product_id: int
    * content: varchar
  - __Wishlist__
    * user_id: int
    * product_id: int

#### ?. Tests

#### ?. Security
