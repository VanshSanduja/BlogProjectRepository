const blogModel = require("../models/blogModel.js");

exports.createBlog = async (req, res) => {
  try {
    const data = req.body;
    const { Title, AuthorName, Image, Description } = data;

    let oldAuthor = await blogModel.findOne({ AuthorName: AuthorName });
    if (oldAuthor) { return res.status(400).send({status: false,message: "Author already exists with this Author Name"});}

    const createDatabase = await blogModel.create(data);
    console.log(createDatabase);
    res.status(201).send({ msg: createDatabase });
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};
