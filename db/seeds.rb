# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "destroying projects, users, comments and tasks"
Comment.destroy_all
Task.destroy_all
Project.destroy_all
User.destroy_all

general = Project.create(name: "general")
paris = Project.create(name: "paris")
react = Project.create(name: "react")
puts "projects created"

nico = User.create(email: "nicolas@gmail.com", password: "azerty")
anna = User.create(email: "anna@gmail.com", password: "azerty")
lily = User.create(email: "lily@gmail.com", password: "azerty")
helo = User.create(email: "helo@gmail.com", password: "azerty")
puts "users created"

laundry = Task.create(name: "Do the laundry", priority: 1, deadline: DateTime.new(2019,5,3), project: general)
grocery = Task.create(name: "Do the grocery", priority: 2, deadline: DateTime.new(2019,5,3), project: general)
floor = Task.create(name: "Clean the floor", priority: 3, deadline: DateTime.new(2019,5,3), project: general)
drink = Task.create(name: "Have a drink", priority: 4, deadline: DateTime.new(2019,5,3), project: general)
Comment.create(content: "a big one !", user: nico, task: drink)
Comment.create(content: "another one !", user: nico, task: drink)
Comment.create(content: "again", user: nico, task: drink)
Comment.create(content: "wtf", user: nico, task: drink)
Comment.create(content: "nice", user: nico, task: drink)