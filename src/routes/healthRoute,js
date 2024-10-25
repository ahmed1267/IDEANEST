import express from "express";

const healthRouter= express.Router();
healthRouter.route('/').get((req,res)=>{
    res.send({Health: true})
})

const genericRoute= express.Router()
genericRoute.route('/').get((req, res)=>{
    res.send({Generic: true})
})

export { healthRouter, genericRoute };