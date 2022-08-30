const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    // "mongodb+srv://Rutu:Rutuatlas3562@cluster0.4soie.mongodb.net/Delta?retryWrites=true&w=majority"
    "mongodb://localhost:27017/?readPreference=primary&directConnection=true&ssl=false"
  );
};
