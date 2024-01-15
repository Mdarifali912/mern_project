import express from 'express';

const app=express()

// app.get('/',(req,res)=>{
//    res.send("server is ready")
// })

app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            title:'a joke',
            content:'this is joke'
        },
        {
            id:2,
            title:'a joke',
            content:'this is smile  joke'
        },
        {
            id:3,
            title:'a joke',
            content:'this is sad joke'
        },
        {
            id:4,
            title:'a joke',
            content:'this is laugh joke'
        }
    ];
    res.send(jokes)

})

const port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`serve at http://localhost:${port}`)
});