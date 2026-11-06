
const express = require("express");
const userRouter = express.Router();
const path = require("path");
const nodemailer = require("nodemailer");
const {dewaliWish,createNewUser}= require('../templates/sendEmails.js')
const realPath = path.join(__dirname, "../", "views", "home.html");

// MigoSMTP Configuration
const transport = nodemailer.createTransport({
  host: "smtp.migomta.com",
  port: 587,
  secure: false, // STARTTLS
  auth: {
    user:  "smtp_55a7e0a699",
    pass:  "8xFm2u8xhho3oRHs4ZnCP3XojoRqK34J"
  }
});

// HTML Escape Function
function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

// Send Email Route
userRouter.get("/", async (req, res) => {

  try {

    const name = "Sandeep Kaur";
    const userId = "chandan@traveltip.co";
    // const userId = "sandeep.amr@traveltip.co";
    const password = "Traveltip@2020";
    const department = "Tourist Visa Counsellor";
    const designation = "Counsellor";
    const team = "Amritsar Branch";
    const loginUrl = "https://crm.thetraveltip.co";

    // Escape HTML to prevent HTML injection
   
    const result = await transport.sendMail({

      from: '"Traveltip CRM" <noreply@thetraveltip.co>',

      to: userId,

      subject: "Your Traveltip CRM Account Has Been Created",

      // html: createNewUser(name,userId,password,department,designation,team,loginUrl)
      html: dewaliWish()
    });

    console.log("Account creation email sent:", result.messageId);


    console.log("Email sent successfully!");
    console.log("Message ID:", result.messageId);

    // Send response after successful email delivery
    res.status(200).json({
      success: true,
      message: "Email sent successfully!",
      messageId: result.messageId
    });

  } catch (error) {

    console.error("Email sending failed:", error);

    res.status(500).json({
      success: false,
      message: "Failed to send email",
      error: error.message
    });

  }

});

module.exports = userRouter;
