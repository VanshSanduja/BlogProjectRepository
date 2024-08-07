const blogModel = require("../models/blogModel.js");

exports.createBlog = async (req, res) => {
  try {
    console.log("Hi");
    const data = req.body;
    const { Title, AuthorName, Image, Description } = data;

    const createdBlog = await blogModel.create(data);
    console.log(createdBlog);
    return res.status(201).send({ msg: createdBlog });
  } catch (error) {
    return res.status(500).send({ msg: error.message });
  }
};

exports.getBookData = async (req, res) => {
  try {
    let id = req.params.getBookId;

    if (!id)
      return res.status(400).send({ status: false, msg: "Id is Required" });

    let data = await blogModel.find({ _id: id, isDeleted: false });

    if (Object.keys(data).length == 0) {
      return res
        .status(400)
        .send({ status: false, msg: "No blooger present in Database" });
    }

    return res.status(200).send({ msg: data });
  } catch (error) {
    return res.status(500).send({ msg: error.message });
  }
};

exports.getAllBooks = async (req, res) => {
  try {
    const filter = req.params.category;

    if (filter == "All Blogs") {
      const AllData = await blogModel.find().sort({ _id: -1 });
      return res.status(200).send({ msg: AllData });
    } else {
      const getData = await blogModel
        .find({ categories: filter.category })
        .sort({ _id: -1 });
      if (!getData) return res.status(404).send({ msg: "No Blogs Present" });
      return res.status(200).send({ msg: getData });
    }
  } catch (error) {
    return res.status(500).send({ msg: error.message });
  }
};

// exports.getBooksData = async (req, res) => {
//   try {
//     let id = req.params._id;
//     console.log(id);

//     if (!id)
//       return res.status(400).send({ status: false, msg: "Id is required" });

//     let data = await blogModel.find({ _id: id, isDeleted: false });

//     if (Object.keys(data).length == 0) {
//       return res
//         .status(400)
//         .send({ status: false, msg: "No Blogger Present in Database" });
//     }

//     return res.status(200).send({ msg: data });
//   } catch (error) {
//     return res.status(500).send({ msg: error.message });
//   }
// };
