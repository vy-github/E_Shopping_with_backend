const connectToMongo = require("./db");
const express = require("express");
const multer = require("multer");
const path = require("path");
const { body, validationResult } = require("express-validator");
const cors = require("cors");
const Item = require("./models/Item");
const User = require("./models/User");

connectToMongo();
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// ENDPOINT 1: Get all the items using: GET "/fetchallitems",
app.get("/fetch", async (req, res) => {
  try {
    const items = await Item.find();
    await res.json(items);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// Saving the uploaded images

// creating storage for file
const storage = multer.diskStorage({
  destination: "../e_shopping/public/upload",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

// Define middleware
const middleware = {
  validationMiddleware: [
    body("title", "Title must be between 3 to 50 character").isLength({
      min: 3,
      max: 50,
    }),
    body(
      "description",
      "Description must be between 5 to 300 character"
    ).isLength({
      min: 5,
      max: 300,
    }),
    body("price", "Please provide valid price").isInt({ min: 0 }),
  ],
  upload: multer({
    storage: storage,
  }).single("image"),
};

app.use(express.static(__dirname + "../e_shopping/public/upload"));

// ENDPOINT 2: Add a new item using: POST "/additem"
app.post(
  "/additem",
  [middleware.validationMiddleware, middleware.upload],
  async (req, res) => {
    try {
      const { title, description, price, category } = req.body;
      // const { image } = req.file;
      const image =
        "D:\\Web Development Bootcamp\\Newton Classes Bootcamp\\Projects\\Borderfree tech\\upcoming\\e_shopping\\public\\upload\\image.jpg";

      // console.log(title + "  " + image);

      // If there are errors, return Bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const item = new Item({
        title,
        description,
        price,
        category,
        image,
      });
      const savedNote = await item.save();

      res.json(savedNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// ENDPOINT 3: create new user using: POST "/newuser"
app.post(
  "/newuser",
  [
    body("firstname", "Firstname must be between 3 to 10 character").isLength({
      min: 3,
      max: 10,
    }),
    body("lastname", "Lastname must be between 3 to 10 character").isLength({
      min: 3,
      max: 10,
    }),
    body("eid", "Enter a valid email").isEmail(),
    body("mobile", "Enter a valid Mobile number").isMobilePhone(),
    body("password", "Password must be between 8 to 24 character").isLength({
      min: 8,
      max: 24,
    }),
  ],
  async (req, res) => {
    try {
      const { firstname, lastname, eid, mobile, password } = req.body;

      // If there are errors, return Bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const user = new User({
        firstname,
        lastname,
        eid,
        mobile,
        password,
      });
      const savedUser = await user.save();

      res.json(savedUser);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// ENDPOINT 4: Get all the items using: POST "/login",
app.post("/login", async (req, res) => {
  const { eid, password } = req.body;

  try {
    let user = await User.findOne({ eid, password });

    if (!user) {
      return res
        .status(400)
        .json({ error: "Please try to login with correct credentials" });
    }

    // const user = await User.find();
    await res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// Listning the server at port 5000
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
