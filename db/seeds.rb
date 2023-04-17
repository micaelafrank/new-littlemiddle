# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.destroy_all
Order.destroy_all


user = User.create!(username: "mfrankm", lastName: "Fango", firstName: "Micah", email: "micfrank@gmail.com", phone: 18185549859, password_digest: "123")


users = User.all 
micaela = User.first 

order = Order.create!(user_id: micaela.id, donation: 20, order_date: "April 16, 2023")

firstOrder = Order.first 

plainFlav = PlainChallah.create!(order_id: firstOrder.id, quantity: 2)
chocChipFlav = ChocChipChallah.create!(order_id: firstOrder.id, quantity: 1)
