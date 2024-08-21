import mongoose from "mongoose";

const formItem = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
    default: "Add title/Placeholder",
  },
  value:{
    type: String,
  }
});

const formSchema = new mongoose.Schema({
  formData: [formItem],
  title: {
    type: String,
    required: true,
    default: "Untitled Form",
  },
});

const Form = mongoose.model("Form", formSchema);
export default Form;
