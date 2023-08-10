# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require "open-uri"

Coach.destroy_all

coach1 = Coach.new(name: "Евгений", filter: "функционалка, сила, растяжка, фитбокс")
photo1 = URI.open("https://res.cloudinary.com/dzuk6qaao/image/upload/v1691581163/golub_photo_a6hbfe.png")
coach1.photos.attach(io: photo1, filename: "golub_photo", content_type: "image/png")
photo2 = URI.open("https://res.cloudinary.com/dzuk6qaao/image/upload/v1691585902/golub_text_skagms.png")
coach1.photos.attach(io: photo2, filename: "golub_text", content_type: "image/png")
coach1.save!

coach2 = Coach.new(name: "Юлия", filter: "сила, растяжка, функционалка, мфр")
photo1 = URI.open("https://res.cloudinary.com/dzuk6qaao/image/upload/v1691581163/yulia_photo_jbjifk.png")
coach2.photos.attach(io: photo1, filename: "yulia_photo", content_type: "image/png")
photo2 = URI.open("https://res.cloudinary.com/dzuk6qaao/image/upload/v1691669058/yulia_text_r05otk.png")
coach2.photos.attach(io: photo2, filename: "yulia_text", content_type: "image/png")
coach2.save!

coach3 = Coach.new(name: "Яна", filter: "сила, функционалка, растяжка, после родов, мфр, реабилитация")
photo1 = URI.open("https://res.cloudinary.com/dzuk6qaao/image/upload/v1691581163/yana_photo_lxzrwa.png")
coach3.photos.attach(io: photo1, filename: "yana_photo", content_type: "image/png")
photo2 = URI.open("https://res.cloudinary.com/dzuk6qaao/image/upload/v1691669058/yana_text_pxkn9j.png")
coach3.photos.attach(io: photo2, filename: "yana__text", content_type: "image/png")
coach3.save!

coach4 = Coach.new(name: "Амира", filter: "функционалка, сила")
photo1 = URI.open("https://res.cloudinary.com/dzuk6qaao/image/upload/v1691581163/amira_photo_retuuf.png")
coach4.photos.attach(io: photo1, filename: "amira_photo", content_type: "image/png")
photo2 = URI.open("https://res.cloudinary.com/dzuk6qaao/image/upload/v1691669058/amira_text_m4aire.png")
coach4.photos.attach(io: photo2, filename: "amira_text", content_type: "image/png")
coach4.save!

coach5 = Coach.new(name: "Кристина", filter: "функционалка, сила")
photo1 = URI.open("https://res.cloudinary.com/dzuk6qaao/image/upload/v1691584380/kristina_photo_bnjalz.png")
coach5.photos.attach(io: photo1, filename: "kristina_photo", content_type: "image/png")
photo2 = URI.open("https://res.cloudinary.com/dzuk6qaao/image/upload/v1691669058/kristina_text_rlkhsw.png")
coach5.photos.attach(io: photo2, filename: "kristina_text", content_type: "image/png")
coach5.save!

# coach5 = Coach.new(name: "Темирлан", filter: "сила, функционалка")
# # photo = URI.open("https://res.cloudinary.com/dmn9i4cwm/image/upload/v1678801134/cld-sample.jpg")
# # user1.photo.attach(io: photo, filename: "lamar.png", content_type: "image/jpg")
# coach5.save!
