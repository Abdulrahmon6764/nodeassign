let express = require('express');
let app = express();
const userRouter = require('./routes/routes');


// app.get('/', (req,res)=>{
  
//     res.send('hellow home')
   
// })

// app.get('/services', (req,res)=>{
//     res.send('hello services')
//     console.log('services')
// })


app.use(userRouter)
app.listen(5000)