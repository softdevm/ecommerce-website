from django.db import models

class User(models.Model):
    username = models.CharField(max_length = 100)
    password = models.CharField(max_length = 100)
    email = models.EmailField()
    name = models.CharField(max_length = 100)
    address = models.CharField(max_length = 100)
    phone = models.CharField(max_length = 20) # subject to change

    wishlist = models.ManyToManyField(Product)
    cart = models.ManyToManyField(Product, through = 'Cart')
    orders = models.ManyToManyField(Product, through = 'Order')

    created_at = models.DateTimeField(auto_now_add = True)

class Product(models.Model):
    name = models.CharField(max_length = 100)
    description = models.CharField(max_length = 2000)
    price = models.FloatField()
    discount = models.IntegerField(validators = [
                                    MinValueValidator(0),
                                    MaxValueValidator(100)])

    reviews = models.ManyToManyField(User, through = 'Review')
    comments = models.ManyToManyField(User, through = 'Comment')

class Image(models.Model):
    name = models.CharField(max_length = 100)
    path = models.FilePathField()
    product_id = models.ForeignKey(Product, on_delete = models.CASCADE)

class Cart(models.Model):
    total = models.FloatField()
    user_id = models.ForeignKey(User, on_delete = models.CASCADE)
    product_id = models.ForeignKey(Product, on_delete = models.CASCADE)

class Order(models.Model):
    total = models.FloatField()
    user_id = models.ForeignKey(User, on_delete = models.CASCADE)
    product_id = models.ForeignKey(Product, on_delete = models.CASCADE)

class Review(models.Model):
    stars = models.IntegerField(validators = [
                                    MinValueValidator(0),
                                    MaxValueValidator(5)])
    user_id = models.ForeignKey(User, on_delete = models.CASCADE)
    product_id = models.ForeignKey(Product, on_delete = models.CASCADE)

class Comment(models.Model):
    content = models.CharField(max_length = 255)
    dateTime = models.DateTimeField()
    user_id = models.ForeignKey(User, on_delete = models.CASCADE)
    product_id = models.ForeignKey(Product, on_delete = models.CASCADE)
