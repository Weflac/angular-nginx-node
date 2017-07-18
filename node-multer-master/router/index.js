/**
 * @author:水痕
 * @time:2017-07-13 14:21
 * @email:332904234@qq.com
 * @version:1.0
 * @fileName:03_router
 * @title:
 */
'use strict';
const express = require("express");
const router = express.Router();
//引入数据库文件
const db = require("./../module/db");
//导入上传文件模块
const upload = require("./../module/multer");



router.get("/", (req, res) => {
    db("select * from file",(err,data)=>{
        if(data){
            res.render("index.ejs",{data:data});
        }
    })
});

/**
 * 定义上传的视图
 */
router.post("/fileupload", upload.single("uploadFile"), (req, res) => {
    //限制没选择文件上传出错
    if (!req.file){
        res.send("请选择文件有错误");
        return false;
    }
    console.log(req.body);
    /**
     * 可以根据req.file获取上传后的具体信息(文件名[filename],类型[mimetype],大小[size]);
     */
    db("insert into file(filename,type,size,name,album) values(?,?,?,?,?)",[req.file.filename,req.file.mimetype,req.file.size,req.body.name,req.body.album],(err,data)=>{
        if (err){
            res.send("文件选择有错误");
        }
        if (data){
            res.send("上传成功");
        }
    })
});

router.get("/albumlist",(req,res)=>{
    db("select * from file",(err,data)=>{
        if(data){
            res.json({
                'data':data,
                'code':1,
                'info':'success'
            })
        }
    })
})

router.get("/userlist",(req,res)=>{
    db("select * from file where id = ?",[req.query.id],(err,data)=>{
        if(err){
            res.json({
                'data':data,
                'code':0,
                'info':'error'
            })
        }
        if(data){
            res.json({
                'data':data,
                'code':1,
                'info':'success'
            })
        }
    })
})

module.exports = router;
