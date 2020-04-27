const express= require('express');
const db= require('../data/db_config.js');

const router= express.Router();

router.get('/', async (req, res, next) => {
    try{

        // translates to SELECT * FROM "cars";

        const cars= await db('cars');
        res.json(cars);
    } catch(err){
        console.log('Get cars list error:', err);
        next(err);
    };
});

router.get('/:id', validateCarId(), async (req, res, next) => {
    try{

        // SELECT * FROM "cars" WHERE "id" = ? LIMIT 1;
        // destructure account because knex would return an arr with the object at 1st index

        // 1. This SQL method originally returns an array, so we want to specify using the
        // `first` keyword to return to us the exact object in the array

        const car= await db('cars').where('id', req.params.id).first();
        res.json(car);
    } catch(err){
        console.log('Get car by ID error:', err);
        next(err);
    };
});

router.post('/', validateCarInfo(), async (req, res, next) => {
    try{
        const payload= {
            VIN: req.body.VIN,
            MAKE: req.body.MAKE,
            MODEL: req.body.MODEL,
            MILEAGE: req.body.MILEAGE,
            YEAR: req.body.YEAR,
            PRICE: req.body.PRICE
        };

        // translates to `INSERT INTO "accounts" ("name", "budget") VALUES (?, ?);`

        // 1. This SQL method also returns an array, so we want to specify using the
        // `first` keyword to return to us the exact object in the array

        // 2. This SQL method returns the id of the created post
        // therefore we want to make another axios call to db to retreive 
        // newly created post.

        const [newCar]= await db('cars').insert(payload);
        const getNewCar= await db('cars').where('id', newCar).first();

        res.status(201).json(getNewCar);

    } catch(err){
        console.log('Error creating car:', err);
        next(err);
    };
});

router.put('/:id', validateCarInfo(), validateCarId(), async (req, res, next) => {
    try{
        const payload= {
            VIN: req.body.VIN,
            MAKE: req.body.MAKE,
            MODEL: req.body.MODEL,
            MILEAGE: req.body.MILEAGE,
            YEAR: req.body.YEAR,
            PRICE: req.body.PRICE,
            TRANSMISSION_TYPE: req.body.TRANSMISSION_TYPE,
            TITLE: req.body.TITLE
        };

        // translates to `UPDATE "cars" SET "transmission_type" = ? AND "title" = ? WHERE "id" = ?;`

        // 1. This SQL method will return the `count` 
        // example: `1` of what object/data was updated

        await db('cars').where('id', req.params.id).update(payload);
        const updatedCar= await db('cars').where('id', req.params.id).first();
        res.json(updatedCar);
        
    } catch(err){
        console.log('Error updating:', err);
        next(err);
    };
});

router.delete('/:id', validateCarId(), async (req, res, next) => {
    try{
        // translates to `DELETE FROM "cars" WHERE "id" = ?;`

        await db('cars').where('id', req.params.id).del();
        res.status(204).end();

    } catch(err){
        console.log('Error deleting:', err);
        next(err);
    };
});

// ---------  Validator Functions  ----------


// validates Car ID exists
function validateCarId() {
    return async (req, res, next) =>{
      try{
        const carById= await db('cars').where('id', req.params.id).first();
        if(carById){
          req.car= carById;
          next();
        } else{
          res.status(404).json({
            request_errorMessage: 'Invalid car id or car does not exist'
          })
        }
      } catch(err){
        console.log(err);
        next(err);
      }
    }
}

// validates object is being sent correctly
function validateCarInfo() {
    return (req, res, next) => {
      if(!req.body){
        return res.status(400).json({
          error_message: 'Missing car data',
        })
      } else if(!req.body.VIN){
        return res.status(400).json({
          error_message: 'Missing required VIN number',
        })
      } else if(!req.body.MAKE){
        return res.status(400).json({
          error_message: 'Missing required car make field',
        })
      } else if(!req.body.MODEL){
        return res.status(400).json({
          error_message: 'Missing required car model field',
        })
      } else if(!req.body.MILEAGE){
        return res.status(400).json({
          error_message: 'Missing required car mileage field',
        })
      } else if(!req.body.YEAR){
        return res.status(400).json({
          error_message: 'Missing required year of car field',
        })
      } else if(!req.body.PRICE){
        return res.status(400).json({
          error_message: 'Missing required price of car field',
        })
      } else{
        next();
      }
    }
}

module.exports= router;