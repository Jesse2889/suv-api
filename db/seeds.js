
const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const Car = require('../models/car')

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
  if (err) return console.log(err)
  db.dropDatabase()
  return Car.create([
    {
      name: 'Toyota RAV4',
      price: 30000,
      image: 'https://cdn.motor1.com/images/mgl/xvL92/s1/toyota-rav4-plug-in-hybrid-teaser.jpg',
      description: 'The Toyota Rav 4 is a self charging hybrid SUV that is reliable and modern at a really fair price for a SUV'
    },
    {
      name: 'Mercedes GLE Coupe',
      price: 72500,
      image: 'https://www.mercedes-benz.co.uk/passengercars/mercedes-benz-cars/models/gle/coupe-c167/explore/highlights/_jcr_content/contentgallerycontainer/par/contentgallery/par/contentgallerytile_58586423/image.MQ6.8.20191119092227.jpeg',
      description: 'Sportiness meets true elegegance with the GLE Coupe.Brilliant in sport mode and a great typtronic gearbox'
    },
    {
      name: 'Lexus NX',
      price: 36000,
      image: 'https://images.netdirector.co.uk/gforces-auto/image/upload/w_1920,h_1440,dpr_2.0,q_auto,c_fill,f_auto,fl_lossy/auto-client/91a5287d2b5b77af6c51746fbf4d0a0f/nx300h_sport_q417_offer_desktop.jpg',
      description: 'Modern art hits the metropolis in the strikingly fluid lines of the Lexus NX Hybrid. Equipped with Lexus Self-Charging Hybrid, an impressive specification list and a host of other options, you can truly configure the NX Hybrid to match your lifestyle.'
    },
    {
      name: 'BMW X7',
      price: 70000,
      image: 'https://cdn.motor1.com/images/mgl/m6mnB/s1/2019-bmw-x7-first-drive.jpg',
      description: 'Luxury gets adventurous with the new BMW X7 Sports Activity Vehicle (SAV). Oozing extravagance and refinement, it takes the familiar and impressive X model confidence and infuses it with pure opulence. Designed to elevate every moment of the journey, discover a new echelon of driving pleasure.'
    },
    {
      name: 'Jaguar F-pace',
      price: 37000,
      image: 'https://i.ytimg.com/vi/0PwxisYA0IQ/maxresdefault.jpg',
      description: 'Jaguar F‑PACE is a performance SUV with the DNA of a sports car. From the bonnet bulge to the pronounced rear haunches, its powerful looks make it distinctive and give it a head-turning road presence.'
    },
    {
      name: 'Jeep Wrangler Sport',
      price: 40000,
      image: 'https://c4d709dd302a2586107d-f8305d22c3db1fdd6f8607b49e47a10c.ssl.cf1.rackcdn.com/thumbnails/stock-images/b72868d906975b96c170a14f60b7889c.png',
      description: 'With the Jeep® Wrangler Sport nothing stands in the way of adventure. Staying true to it’s heritage with iconic round headlamps and seven slot grille, the Wrangler Sport is completely authentic and the ideal model for the entry into the fascinating world of the Jeep® Wrangler'
    },
    {
      name: 'Ranger Rover Sport',
      price: 63000,
      image: 'https://carwow-uk-wp-3.imgix.net/rrs18my041017phevdynamic04-1.jpg',
      description: 'With sportier design cues and a powerful, muscular stance, Range Rover Sport is designed for impact. Cleaner, more dynamic, there’s a contemporary feel everywhere you look—from the Range Rover Sport grille, redesigned bonnet vents to the refined, yet sporty wheel options.'
    },
    {
      name: 'Suzuki Jimny',
      price: 18000,
      image: 'https://cdn.motor1.com/images/mgl/V1N7K/s1/suzuki-jimny-black-bison-by-wald.jpg',
      description: 'A robust ladder frame, three ample body angles, 3-link rigid axle suspension with coil springs and ALLGRIP Pro 4WD with a low-range transfer gear.Equipped with a 1.5 litre engine, it takes you wherever you want to go with unrivalled agility and powerful torque when you need it most.'

    },

    {
      name: 'Audi Q7',
      price: 55000,
      image: 'https://www.nationwidevehiclecontracts.co.uk/m/0/audi-q7-2020-s-line.jpg',
      description: 'A powerhouse performer, the SQ7 features a biturbo V8 engine which delivers 900Nm of torque to take you from 0-62mph in just 4.8 seconds.'

    },
    {
      name: 'Maserati Levante Trofeo',
      price: 123000,
      image: 'https://www.oraclefinance.co.uk/wp-content/uploads/2018/04/14339-maseratilevantetrofeo2018.jpg',
      description: 'the tempestuous new Levante Trofeo SUV expresses that same power, capable of transforming from benign calm to raging storm in an instant.Yet regardless of its spellbinding acceleration, no Maserati road car would ever sacrifice luxury for performance. The sporting interior of the Levante Trofeo offers all the comfort of a prestigious SUV, built to the enduring principles of Maserati grand touring. 0-60 in 4.8 seconds'

    },

    {
      name: 'Volkswaggen T-cross',
      price: 17000,
      image: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/sb4_9554.jpg?itok=AZSe7sWH',
      description: ''

    },

    {
      name: 'Volkswagen Touareg',
      price: 43000,
      image: 'https://carwow-uk-wp-3.imgix.net/2018-vw-touareg-review-12.jpg',
      description: 'Sublime comfort and next generation technology in a truly thoroughbred off-roader. Nothing drives like the Touareg.'


    },
    {
      name: 'Mercedes GLS',
      price: 72000,
      image: 'https://www.mercedes-benz.com/en/vehicles/passenger-cars/gls/gls/_jcr_content/root/slider_0/sliderchilditems/slideritem/image/MQ7-0-image-20190417160601/01-mercedes-benz-gls-2019-x167-suv-3400x1440.jpeg',
      description: 'The hefty proportions, the long bonnet and wheels of up to 23 inches in size communicate power and presence. Clear surfaces and minimalist lines lend everything a light and elegant air.'


    },
    {
      name: 'Seat Terraco',
      price: 28000,
      image: 'https://parkers-images.bauersecure.com/pagefiles/262859/cut-out/600x400/seat-tarraco-001.jpg',
      description: 'The SEAT Tarraco was designed for space and comfort, with capacity to seat 7 people. Discover design, technology and safety features here.'


    },

    {
      name: 'Bentley Bentayga',
      price: 134000,
      image: 'https://www.bentleymotors.com/content/dam/bentley/Master/Models/VideostageHero/Bentayga-Design-Series-Onyx-homepage-1920x805.jpg/_jcr_content/renditions/Bentayga-Design-Series-Onyx-homepage-699x371.jpg./Bentayga-Design-Series-Onyx-homepage-699x371.jpg',
      description: 'Bentayga is unlike any other sport utility vehicle in the world. This powerful, all-terrain, all-purpose car offers an exceptional driving experience. As well as having the most technically advanced engine in its category, it has Mulliner Driving Specification fitted as standard and a choice of more paint colours than any other SUV. Bentayga brings together outstanding performance and unparalleled levels of luxury on and off-road. '


    },

    {
      name: 'Porsche Cayenne Turbo',
      price: 101000,
      image: 'https://newsroom.porsche.com/image/image_1080x624/eb07ecbf-b884-4cc1-b077-c50e9cdffff0.jpg',
      description: 'Five doors that are open to any adventure. With a dynamic design and efficient turbocharged engines. With outstanding digital connectivity that brings the whole world into the cockpit. With versatility, quality and cutting-edge assistance systems, offering both driver and passengers extraordinary comfort.'


    },
    {
      name: 'Volvo XC40',
      price: 27000,
      image: 'https://cdn2.autoexpress.co.uk/sites/autoexpressuk/files/styles/article_main_image/public/2018/06/dsc_7325.jpg?itok=9zWEghSm',
      description: 'No one can do everything, But everyone can do something. Bold by Design. Compact SUV. Technology Synced to You. 28.6 Miles in Pure Mode. Types: Momentum, Inscription, R-Design.'


    },

    {
      name: 'Audi Q5',
      price: 45000,
      image: 'https://www.audi.com/content/dam/gbp2/experience-audi/models-and-technology/production-models/q5/my2019/1920x1080-gal-prop-tx/1920x1080_desktop_AQ5_161004.jpg?imwidth=942&imdensity=1',
      description: 'The most intelligent Q5 yet, featuring the latest driver-assist technologies within its beautiful, flowing design.'


    },

    {
      name: 'Skoda Karoq',
      price: 21000 ,
      image: 'https://cdn1.autoexpress.co.uk/sites/autoexpressuk/files/styles/article_main_image/public/2018/01/1skodakaroq.jpg?itok=Dy0BpgCJ',
      description: 'The award-winning mid-sized SUV with a big sense of adventure. The Karoq has won awars in 2019 for best family SUV of the year'


    },

    {
      name: 'BMW X5',
      price: 57000,
      image: 'https://www.halliwelljones.co.uk/uploads/bmw/x5-models-mperformance-1920x1080.jpeg',
      description: 'Forget what you know about sports activity vehicles, the BMW X5 Sports Activity Vehicle (SAV) has been redesigned and rebuilt from the wheels up and has new levels of luxury, connectivity and performance. Whatever adventures lie ahead, know you can.'


    },

    {
      name: 'Mercedes G Class',
      price: 145000,
      image: 'https://www.mercedes-benz.co.uk/passengercars/mercedes-benz-cars/models/g-class/suv-w463/specifications/model-lines/_jcr_content/swipeableteaserbox/par/swipeableteaser_1504953197/asset.MQ6.12.20190918145333.jpeg',
      description: 'One of a kind over 40 years: only the G-Class looks like a G-Class. The design is not only unique but can be personalised to match your own style.'


    },

    {
      name: 'test-A',
      price: '100000',
      image: '',
      description: 'test'


    },

    {
      name: 'test-B',
      price: '30000',
      image: '',
      description: 'test'


    },

    {
      name: 'test-C',
      price: '',
      image: '',
      description: 'test'


    },

    {
      name: 'test-D',
      price: '',
      image: '',
      description: 'test'


    }



  ])

    .then(createdCars => console.log(`${createdCars.length} Cars created `))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})