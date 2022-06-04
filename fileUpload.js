const express=require('express');
const multer=require('multer');
const app=express();
const port=6000;

const upload=multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb)
        {

            cb(null,"uploads") // folder name where files uploaded
        },
        filename:function(req,file,cb)
        {
            cb(null,file.fieldname+"-"+Date.now()+".jpg") // file name+date+extention (.jpg)
        }
    })
}).single("user_file"); // paramerter we are passing inside file feild name


app.post('/upload',upload,(req,res)=>{
    res.send("File Uploded");
})

//pass data in postman or thunder ==> http://localhost:6000/upload
//check thunder_file_upload screenshot in upload folder for how to upload file in thunder

app.listen(port,()=>{
    console.log(`Server running on port=${port}`);
})
