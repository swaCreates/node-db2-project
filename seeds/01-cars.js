// allows entry of dummy data

exports.seed = async function(knex) {
  // clear out our rows
  // truncate does more than .del(), like resettting the autoincrementing ID
  
  await knex('cars').truncate();
  
  await knex('cars').insert([
    {
      "VIN": "WBANE73546C942368",
      "MAKE": "Oldsmobile",
      "MODEL": "Silhouette",
      "YEAR": 1999,
      "MILEAGE": 125000,
      "PRICE": "$1990.76",
      "TRANSMISSION TYPE": "Automatic",
      "TITLE": "Clean",
    }, {
      "VIN": "KMHGN4JE8FU604037",
      "MAKE": "Chrysler",
      "MODEL": "LHS",
      "YEAR": 2000,
      "MILEAGE": 150000,
      "PRICE": "$2170.82",
      "TRANSMISSION TYPE": "Automatic",
      "TITLE": "Clean",
    }, {
      "VIN": "1D7RV1CP8AS588278",
      "MAKE": "Mercedes-Benz",
      "MODEL": "SL-Class",
      "YEAR": 1989,
      "MILEAGE": 130000,
      "PRICE": "$3130.85",
      "TRANSMISSION TYPE": "Automatic",
      "TITLE": "Rebuilt",
    }, {
      "VIN": "1G6DV5EP9E0179901",
      "MAKE": "Ford",
      "MODEL": "Escort",
      "YEAR": 2002,
      "MILEAGE": 195000,
      "PRICE": "$4270.49",
      "TRANSMISSION TYPE": "Automatic",
      "TITLE": "Clean",
    }, {
      "VIN": "1GYFC66838R184319",
      "MAKE": "BMW",
      "MODEL": "3 Series",
      "YEAR": 1995,
      "MILEAGE": 160000,
      "PRICE": "$3117.14",
      "TRANSMISSION TYPE": "Manual",
      "TITLE": "Clean",
    }, {
      "VIN": "3N1AB6AP1AL073320",
      "MAKE": "Ford",
      "MODEL": "F250",
      "YEAR": 2003,
      "MILEAGE": 125000,
      "PRICE": "$4910.53",
      "TRANSMISSION TYPE": "Automatic",
      "TITLE": "Clean",
    }, {
      "VIN": "3N1AB7APXFL164695",
      "MAKE": "Lexus",
      "MODEL": "GS",
      "YEAR": 1994,
      "MILEAGE": 39000,
      "PRICE": "$3507.60",
      "TRANSMISSION TYPE": "Automatic",
      "TITLE": "Clean",
    }, {
      "VIN": "5TFCW5F17CX865083",
      "MAKE": "Toyota",
      "MODEL": "Venza",
      "YEAR": 2013,
      "MILEAGE": 45500,
      "PRICE": "$25774.06",
      "TRANSMISSION TYPE": "Automatic",
      "TITLE": "Clean",
    }, {
      "VIN": "JH4KB16677C443516",
      "MAKE": "Chevrolet",
      "MODEL": "Suburban",
      "YEAR": 2006,
      "MILEAGE": 52000,
      "PRICE": "$10682.19",
      "TRANSMISSION TYPE": "Automatic",
      "TITLE": "Clean",
    }, {
      "VIN": "KM8NU4CC4CU057771",
      "MAKE": "Dodge",
      "MODEL": "D250",
      "YEAR": 1993,
      "MILEAGE": 158500,
      "PRICE": "$1326.36",
      "TRANSMISSION TYPE": "Automatic",
      "TITLE": "Clean",
    }
  ]);
};
