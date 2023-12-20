const Contact = require("../../model/contactModel");

exports.contactForm = async (req, res) => {
  try {
    const response = req.body;
    await Contact.create(response);
    return res.status(200).json({ message: "Message send successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Message not delivered" });
  }
};
