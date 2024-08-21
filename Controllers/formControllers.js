import Forms from "../Models/formsModel.js";
import FormResponse from "../Models/resModel.js";

export const newForm = async (req, res) => {
  const { formItem, title } = req.body;
  const formData = Array.isArray(formItem) ? formItem : [formItem];
  const saveNewForm = new Forms({
    formData,
    title: title,
  });
  try {
    const newFormDoc = await saveNewForm.save();
    res.status(200).json({
      message: "Added new form.",
      success: true,
      form: newFormDoc,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server error in Saving Form",
      error: error,
      success: false,
    });
  }
};

export const getAllForm = async (req, res) => {
  try {
    const allFormsData = await Forms.find();
    res.status(200).json({
      data: allFormsData,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server error in loading the Forms",
      error: error,
      success: false,
    });
  }
};

export const findForm = async (req, res) => {
  const { formID } = req.body;
  try {
    const formData = await Forms.findById(formID);
    res.status(200).json({
      message: "Added new form.",
      success: true,
      form: formData,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server error in getting Form",
      error: error,
      success: false,
    });
  }
};

export const updateForm = async (req, res) => {
  const { formItem, title, formID } = req.body;
  try {
    const updatedFormData = await Forms.findByIdAndUpdate(
      formID,
      {
        title: title,
        formData: formItem,
      },
      { new: true }
    );
    res.status(200).json({
      message: "Updated the form.",
      success: true,
      form: updatedFormData,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server error in updating Form",
      error: error,
      success: false,
    });
  }
};

export const deleteFrom = async (req, res) => {
  const { id } = req.params;
  try {
    await Forms.findByIdAndDelete(id);
    res.status(200).json({
      message: "Deleted form.",
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server error in getting Form",
      error: error,
      success: false,
    });
  }
};

export const newResponse = async (req, res) => {
  const { formID, formData,title } = req.body;
  if (!formID || !formData) {
    return res.status(400).json({ error: "formID and formData are required" });
  }
  try { 
    let formResponse = await FormResponse.findOne({ formID });
    if (!formResponse) {
      formResponse = new FormResponse({ formID, responses: [],title:title });
    }

    formResponse.responses.push(formData);
    await formResponse.save();
    res.status(200).json({ success: true, formResponse });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const findFormRes = async (req, res) => {
    const { formID } = req.body;
    try {
      const formData = await FormResponse.find({formID:formID});
      res.status(200).json({
        message: "Added new form.",
        success: true,
        form: formData,
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal Server error in getting Form",
        error: error,
        success: false,
      });
    }
  };