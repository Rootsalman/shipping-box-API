const express = require('express');
const app = express()

app.use(express.json())


app.get('/items', (req, res) => {
    res.send(items)
})
.listen(4500)

const items = []


//Post method

app.post('/items', (req, res) => {
    try {
      const item = req.body;
      items.push(item);
      res.send(items);
    } catch (error) {
      res.send(error)
    }
  })

  app.put('/items/:id', (req, res) => {
    try {
      const id = req.params.id;
      const index = items.findIndex(item =>
        item.id == id);
      items[index] = req.body;
      res.send(items);
    } catch (error) {
      res.send(error);
    }
  
  });
  

  app.delete('/items/:id', (req, res) => {
    try {
      const id = req.params.id; 
      const index = items.findIndex((item) =>
        item.id == req.params.id);
      items.splice(index, 1);
      res.send("Deleted");
    }
    catch (error) {
      res.send(error)
  
    }
  });
  app.get('/items/:id',(req, res) => {
    try{
    const item = items.find(item => 
      item.id == req.params.id);
      res.send(item);
    }
    catch(error){
      res.send(error);
    }
  });

  