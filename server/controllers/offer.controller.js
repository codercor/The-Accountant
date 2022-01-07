const offerModel = require('../models/offer.model');

const getAll = async (req, res) => {
    try {
        const offers = await offerModel.find({ userId: req.user._id }).populate('products').populate('customer').populate('userId');
        res.status(200).json(offers);
    } catch (err) {
        res.status(500).json(err);
    }
}

const getById = async (req, res) => {
    try {
        const offer = await offerModel.findById(req.params.id).populate('products').populate('customer').populate('userId');
        res.status(200).json(offer);
    } catch (err) {
        res.status(500).json(err);
    }
}

const create = async (req, res) => {
    console.log("USER",req.user)
    try {
        const offer = await offerModel.create({...req.body,userId:req.user._id});
        await offer.save();
        console.log("ADDED",offer);
        res.status(200).json(offer);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

module.exports = {
    getAll,
    getById,
    create,
}