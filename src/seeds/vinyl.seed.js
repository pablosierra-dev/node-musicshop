const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Vinyl = require("../api/models/vinyl.models");

const arrayVinyls = [
    {
      "title": "Thriller",
      "artist": "Michael Jackson",
      "year": 1982,
      "genre": "Pop",
      "price": 19.99,
      "stock": 50
    },
    {
      "title": "Back in Black",
      "artist": "AC/DC",
      "year": 1980,
      "genre": "Rock",
      "price": 17.50,
      "stock": 75
    },
    {
      "title": "The Dark Side of the Moon",
      "artist": "Pink Floyd",
      "year": 1973,
      "genre": "Progressive Rock",
      "price": 22.00,
      "stock": 40
    },
    {
      "title": "Their Greatest Hits (1971-1975)",
      "artist": "Eagles",
      "year": 1976,
      "genre": "Rock",
      "price": 21.25,
      "stock": 60
    },
    {
      "title": "Bat Out of Hell",
      "artist": "Meat Loaf",
      "year": 1977,
      "genre": "Rock",
      "price": 18.99,
      "stock": 25
    },
    {
      "title": "Come On Over",
      "artist": "Shania Twain",
      "year": 1997,
      "genre": "Country",
      "price": 16.80,
      "stock": 80
    },
    {
      "title": "Rumours",
      "artist": "Fleetwood Mac",
      "year": 1977,
      "genre": "Rock",
      "price": 20.15,
      "stock": 55
    },
    {
      "title": "The Bodyguard",
      "artist": "Soundtrack",
      "year": 1992,
      "genre": "Soundtrack",
      "price": 14.50,
      "stock": 30
    },
    {
      "title": "Saturday Night Fever",
      "artist": "Bee Gees",
      "year": 1977,
      "genre": "Disco",
      "price": 19.75,
      "stock": 70
    },
    {
      "title": "Come Away With Me",
      "artist": "Norah Jones",
      "year": 2002,
      "genre": "Jazz",
      "price": 15.90,
      "stock": 90
    },
    {
      "title": "Led Zeppelin IV",
      "artist": "Led Zeppelin",
      "year": 1971,
      "genre": "Rock",
      "price": 23.25,
      "stock": 20
    },
    {
      "title": "Backstreet Boys",
      "artist": "Backstreet Boys",
      "year": 1996,
      "genre": "Pop",
      "price": 18.40,
      "stock": 65
    },
    {
      "title": "Jagged Little Pill",
      "artist": "Alanis Morissette",
      "year": 1995,
      "genre": "Alternative Rock",
      "price": 17.99,
      "stock": 45
    },
    {
      "title": "Come and Get It: The Best of Badfinger",
      "artist": "Badfinger",
      "year": 1995,
      "genre": "Rock",
      "price": 14.60,
      "stock": 15
    },
    {
      "title": "Darkness on the Edge of Town",
      "artist": "Bruce Springsteen",
      "year": 1978,
      "genre": "Rock",
      "price": 21.00,
      "stock": 85
    }
  ]

const DB_URL= process.env.DB_URL;

mongoose.connect(DB_URL)
.then(async()=> {
    const allVinyls = await Vinyl.find();
    if (allVinyls.length > 0) {
        await Vinyl.collection.drop();
        console.log("vinilos borrados");
    }
})
.catch((error)=> console.log("error borrando los vinilos",error))
.then(async ()=> {
    const vinylMap = arrayVinyls.map((vinyl) => new Vinyl(vinyl));
    await Vinyl.insertMany(vinylMap);
    console.log("vinilos insertadas correctamente");
})
.catch((error) => console.log("error insertando las vinilos", error))
.finally(()=> mongoose.disconnect())