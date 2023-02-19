const express = require('express');
const {User, Match, Message, Dog} = require('../../db/models')
const router = express.Router();
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { requireAuth } = require('../../utils/auth')
const {Op} = require("sequelize")

//* Get All Dogs Currently in the dating pool
router.get('/', async (req, res, next) => {
    const allDogs = await Dog.findAll()

    if (allDogs) return res.json({
        allDogs
    })
})

//* Get All Dogs by Owner_Id
router.get('/current', requireAuth, async (req, res, next) => {
    const userId = req.user.id

    const dogs = await Dog.findAll({
        where: {
            ownerId: userId
        },
        include: [
            {
                model: User
            }
        ]
    })
    if (dogs) return res.json({
        dogs
    })
})


//* Create a Dog 
router.post('/', requireAuth, async (req, res, next) => {
    const userId = req.user.id

    const {dogName, breed, url} = req.body

    const createDog = await Dog.create({
        ownerId: userId,
        dogName,
        breed,
        url
    })

    if (createDog) {
        return res.json({
            createDog
        })
    }
})

//* Update a Dog by Dog Id
router.put('/:dogId', requireAuth, async (req, res, next) => {
    const userId = req.user.id
    const dogId = req.params.dogId

    const {dogName, breed, url} = req.body
    
    const updateDog = await Dog.findByPk(dogId)

    if (!updateDog) {
        res.status(404) 
        return res.json({
            message: "Dog couldn't be found"
        })
    }

    let dogUserJson = updateDog.toJSON()

    let ownerId = dogUserJson.ownerId

    if (userId !== ownerId) {
        res.status(403)
        return res.json({
            message: "Only the Dog Owner is authorized to update the dog posting"
        })
    }

    updateDog.set({
        dogName, 
        breed,
        url 
    })

    await updateDog.save()
    return res.json(updateDog)
})


//* Delete a Dog
router.delete('/:dogId', requireAuth, async (req, res, next) => {
    const userId = req.user.id
    const dogId = req.params.dogId

    const deleteDog = await Dog.findByPk(dogId)

    if (!deleteDog) {
        res.status(404) 
        return res.json({
            message: "Dog couldn't be found"
        })
    }

    let dogUserJson = deleteDog.toJSON()

    let ownerId = dogUserJson.ownerId

    if (userId !== ownerId) {
        res.status(403)
        return res.json({
            message: "Only the Dog Owner is authorized to delete the dog posting"
        })
    }
    if (deleteDog) {
        res.status(200)
        await deleteDog.destroy()
        return res.json({
            message: "Successfully Deleted",
            statusCOde: 200
        })
    }
})


module.exports = router