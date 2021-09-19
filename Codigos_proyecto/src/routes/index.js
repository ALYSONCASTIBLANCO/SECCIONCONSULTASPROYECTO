const express=require('express');
const router=express.Router();
const Task=require('../models/task');
router.get('/todos',async (req,res)=>{
    const tasks=await Task.find();
    console.log(tasks);
    res.render('index', {tasks});
});

router.get('/categoria-hogar',async (req,res)=>{
    const tasks=await Task.find({"CATEGORIA":"Hogar"});
    console.log(tasks);
    res.render('index', {tasks});
});

router.get('/categoria-belleza',async (req,res)=>{
    const tasks=await Task.find({"CATEGORIA":"Belleza"});
    console.log(tasks);
    res.render('index', {tasks});
});

router.get('/categoria-audio',async (req,res)=>{
    const tasks=await Task.find({"CATEGORIA":"Audio"});
    console.log(tasks);
    res.render('index', {tasks});
});

router.get('/categoria-luces',async (req,res)=>{
    const tasks=await Task.find({"CATEGORIA":"Luces"});
    console.log(tasks);
    res.render('index', {tasks});
});
module.exports=router;
