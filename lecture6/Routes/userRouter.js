
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
    user:  "",
    pass:  ""
  }
});
const recipients = [
  "Manpreet.thandi@traveltip.co",
  "priyankaadvisor@traveltip.co",
  "raman.advisor@traveltip.co",
  "parveen.jalandhar@traveltip.co",
  "rajveer.advisor@traveltip.co",
  "monika.advisor@traveltip.co",
  "mridhu.bhalla@traveltip.co",
  "jasmine.advisor@traveltip.co",
  "muskaan.advisor@traveltip.co",
  "manjot.advisor@traveltip.co",
  "priyanka@traveltip.co",
  "kamal@traveltip.co",
  "christina@traveltip.co",
  "jal.auditing@traveltip.co",
  "jotshnafiling@traveltip.co",
  "seeratfiling@traveltip.co",
  "ramneek@traveltip.co",
  "ruchi.filing@traveltip.co",
  "shivali.filing@traveltip.co",
  "kannu.filing@traveltip.co",
  "vaishali@traveltip.co",
  "Markas@traveltip.co",
  "gourav@traveltip.co",
  "priya@traveltip.co",
  "jahanvi.pathak@traveltip.co",
  "anu.filing@traveltip.co",
  "manik@traveltip.co",
  "it@traveltip.co",
  "neha.accounts@traveltip.co",

  "hr@traveltip.co",
  "tishant@traveltip.co",
  "simran@traveltip.co",
  "priyankasaini@traveltip.co",
  "nehamalhan@traveltip.co",
  "harjot@traveltip.co",
  "kapil.dhingra@traveltip.co",
  "madhu@traveltip.co",
  "lovepreetkaur@traveltip.co",
  "ekta@traveltip.co",
  "anil@traveltip.co",
  "embassyfees@traveltip.co",
  "rahul@traveltip.co",
  "Tarun@traveltip.co",
  "navpreet.singh@traveltip.co",
  "muskaan.sarangal@traveltip.co",
  "lovepreetsingh@traveltip.co",
  "sandeep@traveltip.co",
  "markus@traveltip.co",
  "harpreet.admin@traveltip.co",
  "manpreet.tour@traveltip.co",
  "teamrahul032@gmail.com",
  "teamnavpreet@gmail.com",
  "chandan@traveltip.co",
  "savita@traveltip.co",
  "manpreetteam8@gmail.com",
  "divyanshi@traveltip.co",
  "sandhya@traveltip.co",
  "mintioperator@traveltip.co",
  "gurjot.operator@traveltip.co",
  "tania.operator@traveltip.co",
  "Minti.operator@traveltip.co",
  "isha.operator@traveltip.co",
  "arminder.operator@traveltip.co",
  "manju.feedback@traveltip.co",
  "sharandeep@traveltip.co",
  "Hanishkumar@traveltip.co",
  "tammana.feedback@traveltip.co",
  "amitoj@traveltip.co",
  "ludhiana.accounts@traveltip.co",
  "patialaauditing2@traveltip.co",
  "patiala.leader@traveltip.co",
  "amr.audit@traveltip.co",
  "chd.audit@traveltip.co",
  "amritsaraccounts@traveltip.co",
  "chandigarh.accounts@traveltip.co",
  "accounts.patiala@traveltip.co"
];

// const telecallers=[
//   "sonia.jalcaller@traveltip.co.in",
//   "sapna.caller@traveltip.co.in",
//   'palak.caller@traveltip.co.in',
//   "mehak@traveltip.co.in",
//   "meenakshi.caller@traveltip.co.in",
//   "khushi.caller@traveltip.co.in",
//   "jagdeep.caller@traveltip.co.in",
//   "anamika.caller@traveltip.co.in",
//   "chandan@traveltip.co"
// "sunaina@traveltip.co.in",
   
//    "shivani@traveltip.co.in",
//    'saloni.kashyap@traveltip.co.in',
//    'raman.caller@traveltip.co.in',
//    'nisha.choudary@traveltip.co.in',
//    'nehapaul.caller@traveltip.co.in',
//    'harpreetrattu.caller@traveltip.co.in',
//    'chandnibedi.caller@traveltip.co.in',
//    'tanu.caller@traveltip.co.in',
//    'tamanna.caller@traveltip.co.in',
//    'sonia.caller@traveltip.co.in',
//    'simrannarang.caller@traveltip.co.in',
//    'seerat.caller@traveltip.co.in',
//    'rekha.caller@traveltip.co.in',
//    'komalpreet@traveltip.co.in',
//    'aman.caller@traveltip.co.in',
//    'menka.caller@traveltip.co.in',
//    'suman@traveltip.co.in',
//    'sandeep.sahota@traveltip.co.in',
//    'ritu.caller@traveltip.co.in',
//    'raman@traveltip.co.in',
//    'preeti.caller@traveltip.co.in',
//    'harjitarora.caller@traveltip.co.in',
//    'aarti.caller@traveltip.co.in',
// ]

const telecallers=[
  "embassyfees@traveltip.co",
  "manju.feedback@traveltip.co",
  "sharandeep@traveltip.co",
  // "kapil.dhingra@traveltip.co",
  // "rahul.sharma@traveltip.co.in",
  "",
  "",
]
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

      to: telecallers,

      subject: "Happy Diwali! 🪔",
      // subject: "Your Traveltip CRM Account Has Been Created",

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
