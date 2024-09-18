const express = require('express');
const path = require('path');
const app = express();
const {v4:uuidv4} = require("uuid")
const port = 4000;

app.use(express.static('public'));

const baseUrl = `http://localhost:${port}`

app.get('/', async (req,res) =>{
  // const room_id = await uuidv4();
  // await console.log(`${baseUrl}/${room_id}`)
  // await res.redirect(`/${room_id}`);
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

// app.get('/:room', (req,res)=>{
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// })

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});