# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Coach.destroy_all

coach1 = Coach.new(name: "Евгений", filter: "кардио, сила, растяжка, фитбокс, бокс, борьба")
# photo = URI.open("https://res.cloudinary.com/dmn9i4cwm/image/upload/v1678801134/cld-sample.jpg")
# user1.photo.attach(io: photo, filename: "lamar.png", content_type: "image/jpg")
coach1.save!

coach2 = Coach.new(name: "Юлия", filter: "сила, функционалка, растяжка, мфр")
# photo = URI.open("https://res.cloudinary.com/dmn9i4cwm/image/upload/v1678801134/cld-sample.jpg")
# user1.photo.attach(io: photo, filename: "lamar.png", content_type: "image/jpg")
coach2.save!

coach3 = Coach.new(name: "Яна", filter: "сила, функционалка, растяжка, после родов, мфр, лечебная")
# photo = URI.open("https://res.cloudinary.com/dmn9i4cwm/image/upload/v1678801134/cld-sample.jpg")
# user1.photo.attach(io: photo, filename: "lamar.png", content_type: "image/jpg")
coach3.save!

coach4 = Coach.new(name: "Амира", filter: "мфр, лечебная")
# photo = URI.open("https://res.cloudinary.com/dmn9i4cwm/image/upload/v1678801134/cld-sample.jpg")
# user1.photo.attach(io: photo, filename: "lamar.png", content_type: "image/jpg")
coach4.save!

coach5 = Coach.new(name: "Темирлан", filter: "сила, функционалка")
# photo = URI.open("https://res.cloudinary.com/dmn9i4cwm/image/upload/v1678801134/cld-sample.jpg")
# user1.photo.attach(io: photo, filename: "lamar.png", content_type: "image/jpg")
coach5.save!
