const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://localhost:27017/madebyVS")
  .then(console.log("connection successful.."))
  .catch((err) => {
    console.log(err);
  });

// This is the schema structure must to degine before making the document.
const nameSchema = new mongoose.Schema({
  name: String,
  lname: String,
  age: Number,
  studying: Boolean,
});
// here after the model in the "its the name of the table or collection" and second one is the schema.
const Names = new mongoose.model("Name", nameSchema);

// document insertion
// const studentNames = new Names({
//   name: "Shivansh",
//   lname: "Rai",
//   age: 21,
//   studying: false,
// });

// it takes some time so we use await function and await works in async function so we make async function.

const createDocument = async () => {
  try {
    const thirdName = new Names({
      name: "Aryan",
      lname: "Gupta",
      age: 22,
      studying: false,
    });
    const fourthName = new Names({
      name: "Shivanhi",
      lname: "ka",
      age: 22,
      studying: false,
    });
    const fifthName = new Names({
      name: "Anurag",
      lname: "Gupta",
      age: 22,
      studying: false,
    });
    const sixthName = new Names({
      name: "Aryan",
      lname: "Varshney",
      age: 18,
      studying: false,
    });
    // used to save only one file
    // const result =await thirdName.save();
    const result = await Names.insertMany([
      thirdName,
      fourthName,
      fifthName,
      sixthName,
    ]);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
// save method use above
// thirdName.save();

// createDocument();

const getMethod = async () => {
  const result = await Names.find({ name: "Aryan" });
  console.log(result);
};

// getMethod();

// how to update the doecument

const updateDocument = async (_id) => {
  try {
    const result = await Names.updateOne(
      { _id },
      {
        $set: {
          name: "New",
        },
      }
    );
  } catch (err) {
    console.log(err);
  }
};
// updateDocument("63ce49fac2be12fbb6926686");

// delete the document

const deleteDocument = async (_id) => {
  try {
    // isntead of writing deleteOne we can wirte findByIdandDelete which return the whole documtnt in the result.
    const result = await Names.deleteOne({ _id });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

deleteDocument("63ce49fac2be12fbb6926686");
