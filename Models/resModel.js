import mongoose from "mongoose";

const formResponseSchema = new mongoose.Schema({
  formID: {
    type: String,
    required: true,
    unique: true,
  },
  responses: [],
  title:{
    type: String,
    required: true,
  }
});

const FormResponse = mongoose.model("FormResponse", formResponseSchema);

export default FormResponse;
