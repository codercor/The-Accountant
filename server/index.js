const express = require ('express'); //express web server framework
const pdf = require('html-pdf'); //generate pdf from html
const cors = require('cors'); //cors error block
const mongoose = require('mongoose') //mongoose for database connection
const pdfTemplate = require('./documents'); //html template for pdf
//models
const customerModel = require('./models/customer.model.js')
const productModel = require('./models/product.models.js');

//represents application
const app = express(); //create express server
const port =  3001; //port for server
require('dotenv').config(); //configure dotenv
//routes
const authRoute = require('./routes/auth.route');
const userRoute = require('./routes/user.route');
const customerRoute = require('./routes/customer.route');
const todoRoute = require('./routes/todo.route');

app.use(cors()); //use cors
app.use(express.urlencoded({extended: true})); 
app.use(express.json()); //for each request, parse body of request

//db connection
mongoose.connect(process.env.DB_CONNECTION_STRING),
{
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}
const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use("/auth", authRoute);
app.use('/user',userRoute);
app.use('/customer',customerRoute);
app.use('/todo',todoRoute)

//create customer
app.post('/create-customer', async (req, res) => {

    const customer = new customerModel(req.body);
  
    try {
      await customer.save();
      res.send(customer);
    } catch (error) {
      res.status(500).send(error);
    }

});

//get all customers
app.get("/find-customers", async (req, res) => {
    const customers = await customerModel.find({});
  
    try {
      res.send(customers);
    } catch (error) {
      res.status(500).send(error);
    }
  });

//find user by name
  app.get("/find-userbyname/:name", async (req, res) => {
    const name = req.params.name
    const customers = await customerModel.find({name: name});

    try {
      res.send(customers);
    } catch (error) {
      response.status(500).send(error);
    }
  });

//create product / service offering
app.post('/create-product', async (req, res) => {

  const product = new productModel(req.body);

  try {
    await product.save();
    res.send(product);
  } catch (error) {
    res.status(500).send(error);
  }

});

//get all products / service offerings
app.get("/find-products", async (req, res) => {
  const products = await productModel.find({});

  try {
    res.send(products);
  } catch (error) {
    res.status(500).send(error);
  }
});

//get product by name
app.get("/find-product/:name", async (req, res) => {
  const name = req.params.name
  const products = await productModel.find({name: name});

  try {
    res.send(products);
  } catch (error) {
    res.status(500).send(error);
  }
});


//delete customer 
app.delete("/delete-customer/:uid", async (req,res) => 
{   const uid = req.params.uid  
    const customer = await customerModel.findOneAndDelete({uid: uid})  
    try {    
      res.send(customer)  
    }
    catch(error) {    
      res.status(500).send(error);  
    }})



//POST - PDF generation and fetching of the data

app.post('/create-pdf', (req, res) => {
    pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
        if(err) {
            res.send(Promise.reject());
        }
        res.send(Promise.resolve());  
    });
});

//GET - Send the generated PDF to the client

app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`)
})


app.listen(port, () => console.log(`Listening on port ${port}`));


//PUT - Change Data
//POST - Create new Object
//GET - get Data from db

