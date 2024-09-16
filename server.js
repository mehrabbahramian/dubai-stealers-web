const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = 3001;

const server = http.createServer((req,res)=>{
    let filePath = path.join(
        __dirname,
        'public',
        req.url === '/' ? 'index.html' : req.url
        );
    let extname = path.extname(filePath);

    let contentType = 'text/html';

    switch(extname){
        case ".js":
            contentType = 'text/javascript';
            break;
        case ".css":
            contentType = 'text/css';
            break;
        case ".json":
            contentType = "application/json";
            break;
        case ".png":
            contentType = "image/png";
            break;
        case ".jpg":
            contentType = "image/jpg";
            break;
    }
    if(contentType === 'text/html' && extname === ''){
        filePath += '.html';
    }

    fs.readFile(filePath, 
    (err,data)=>{
        if(err){
            if(err.code === 'ENOENT'){
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err,data)=>{
                    res.writeHead(404, {'Content-Type' : 'text/html'});
                    res.end(data, 'utf-8');
                })
            }else{
                res.writeHead(500);
                res.end(`Server Error : ${err.code}`)
            }
        }else{
            res.writeHead(200,{'Content-Type': contentType});
            res.end(data, 'utf-8');
        } 
    });
    });

server.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`)
})

// const express = require("express");

// const app = express();
// const path = require('path');
// const router = express.Router();
// const PORT = 3001;

// // app.set("view engine", "ejs");
// app.use(express.static("public"));

// router.get("/", (req,res)=>{
//     res.sendFile(path.join(__dirname + 'index.html'))
// })
// app.get("/contact", (req,res)=>{
//     res.status(200).render('contact',{pageTitle: "Contact Us" , pageDescription: "Have any questions?Get in touch with us easily!"});
// })

// app.get("/gallery", (req,res)=>{
//     res.status(200).render('gallery',{pageTitle: "Gallery", pageDescription: "We share our moments in Dubaistealers with you here!"});
// })
// app.get("/programs-grid", (req,res)=>{
//     res.status(200).render('programs-grid',{pageTitle: "Programs", pageDescription: "Choose one of our programs,and start your journey with us!"});
// })

// app.get("/ourcoaches", (req,res)=>{
//     res.status(200).render('ourcoaches', {pageTitle: "Our Coaches", pageDescription: "We introduce you our coaches,so you can know DubaiStealers team better!"});
// })
// app.get("/whoweare", (req,res)=>{
//     res.status(200).render('whoweare', {pageTitle: "Who We Are", pageDescription:"We're gonna tell you every thing about our academy!"});
// })
// app.get("/kids-asa-eca", (req,res)=>{
//     res.status(200).render('kids-asa-eca', {pageTitle:"Kids ASA/ECA", programDescription: "Elevate Your Child's Afternoons!", h3:"Enrich your child's afternoons with our Kids ASA and ECA programs.", p:"Booking is available on a per-term basis (4 months) on weekdays, typically starting after 3 pm. Choose between After-School Activities or Extra-Curricular Activities, all run by Stealers. Your child will have a blast while learning valuable skills."})
// })
// // app.get("/login", (req,res) =>{
// //     res.status(200).render('login',{})
// // })
// router.get('/login',(req,res)=>{
//     res.sendFile(path.join(__dirname + '/login.html'));
// })



// app.get("*", (req,res)=>{
//     res.status(404).render('404', {pageTitle: "Error!"});
// })
// app.listen(PORT, ()=>{
//     console.log(`server is running at http://localhost:${PORT}`);
// })