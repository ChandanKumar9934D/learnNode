const express = require("express");
const userRouter = express.Router();
const path=require("path")
console.log('path');
const nodemailer=require("nodemailer")
//  import nodemailer from 'nodemailer';

const realPath=path.join(__dirname,"../","views","home.html")

userRouter.get("/", async(req, res, next) => {
 
const transport = nodemailer.createTransport({
  host: 'smtp.migomta.com',
  port: 587,
  secure: false, // STARTTLS
  auth: { user: 'smtp_55a7e0a699', pass: ",nmbnnbbnvbv" },
});
 const name="Test User"
  const email="anamika.caller@traveltip.co.in"
  const userId="rackwaveofficial@gmail.com"
  const password ="password"
  const loginUrl="crm.thetraveltip.co"
  const team="Telecaller"

const result = await transport.sendMail({
  from: '"Traveltip CRM" >',
to: [
  'rackwaveofficial@gmail.com'

  ],
    subject: "Test Email - Traveltip CRM",

   html: `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>

    <body style="margin:0;padding:30px 10px;background:#f3f6fb;
                 font-family:Arial,sans-serif;color:#263247;">

      <div style="max-width:600px;margin:auto;background:#ffffff;
                  border-radius:10px;overflow:hidden;">

        <div style="background:#123c69;padding:30px;
                    text-align:center;color:#ffffff;">
          <h1 style="margin:0;font-size:26px;">Traveltip CRM</h1>
          <p style="margin:10px 0 0;color:#dbeafe;">
            Email Delivery Test
          </p>
        </div>

        <div style="padding:30px;">
          <h2 style="color:#159447;margin-top:0;">
            Test Email
          </h2>

          <p style="font-size:15px;line-height:1.8;">
            Hello,
          </p>

          <p style="font-size:15px;line-height:1.8;">
            This is a test email from Traveltip CRM using MigoSMTP.
            We are checking email delivery and HTML formatting.
          </p>

          <div style="background:#f0f7ff;border:1px solid #d6e8ff;
                      border-radius:8px;padding:18px;margin:24px 0;">
            <p style="margin:8px 0;">
              <strong>Application:</strong> Traveltip CRM
            </p>
            <p style="margin:8px 0;">
              <strong>Email Service:</strong> MigoSMTP
            </p>
            <p style="margin:8px 0;">
              <strong>Purpose:</strong> Email Delivery Testing
            </p>
          </div>

          <p style="font-size:15px;line-height:1.8;">
            If you have received this email, please confirm that
            it has been delivered successfully.
          </p>

          <p style="font-size:15px;line-height:1.8;">
            No action is required. This email is for testing purposes only.
          </p>

          <p style="font-size:15px;margin-top:25px;">
            Best Regards,<br>
            <strong>Traveltip CRM Team</strong>
          </p>
        </div>

        <div style="background:#f3f6fb;padding:18px;
                    text-align:center;font-size:12px;color:#64748b;">
          This is an automated test email from Traveltip CRM.
          <br><br>
          &copy; Traveltip. All rights reserved.
        </div>

      </div>
    </body>
    </html>
  `,
});

console.log("Email sent:", result.messageId);

// const result=await transport.sendMail({
//   from: 'noreply@thetraveltip.co',
//   to: 'chandan@traveltip.co',
//   subject: 'Hello from MigoSMTP',
//   text:   `
//       <!DOCTYPE html>
//       <html>
//       <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       </head>
//       <body style="margin:0; padding:0; background:#f3f6fb;
//                    font-family:Arial,sans-serif; color:#263247;">

//         <div style="max-width:620px; margin:30px auto;
//                     background:#ffffff; border-radius:12px;
//                     overflow:hidden;">

//           <!-- Header -->
//           <div style="background:#123c69; padding:30px 24px;
//                       text-align:center; color:#ffffff;">
//             <h1 style="margin:0; font-size:27px;">
//               Traveltip CRM
//             </h1>
//             <p style="margin:10px 0 0; font-size:14px; color:#dbeafe;">
//               Customer Relationship Management
//             </p>
//           </div>

//           <!-- Welcome Message -->
//           <div style="padding:30px 28px;">
//             <h2 style="color:#123c69; margin-top:0;">
//               Welcome, ${escapeHtml(name)}!
//             </h2>

//             <p style="font-size:15px; line-height:1.7;">
//               Your Traveltip CRM account has been successfully created.
//               You can now log in using the account details provided below.
//             </p>

//             <!-- Account Details -->
//             <div style="background:#f0f7ff; border:1px solid #d6e8ff;
//                         border-radius:8px; padding:20px; margin:24px 0;">
//               <h3 style="margin:0 0 16px; color:#123c69;">
//                 Your Login Details
//               </h3>

//               <p style="margin:10px 0;">
//                 <strong>Name:</strong> ${escapeHtml(name)}
//               </p>
//               <p style="margin:10px 0;">
//                 <strong>User ID:</strong> ${escapeHtml(userId)}
//               </p>
//               <p style="margin:10px 0;">
//                 <strong>Team:</strong> ${escapeHtml(team)}
//               </p>
//               ${
//                 password
//                   ? `<p style="margin:10px 0;">
//                        <strong>Temporary Password:</strong>
//                        ${escapeHtml(password)}
//                      </p>`
//                   : `<p style="margin:10px 0;">
//                        <strong>Password:</strong>
//                        Use the password you created or the password setup
//                        link provided by your administrator.
//                      </p>`
//               }
//             </div>

//             <!-- Login Button -->
//             <div style="text-align:center; margin:30px 0;">
//               <a href="${escapeHtml(loginUrl)}"
//                  style="background:#1677ff; color:#ffffff;
//                         text-decoration:none; padding:14px 32px;
//                         border-radius:6px; display:inline-block;
//                         font-weight:bold; font-size:15px;">
//                 Login to Traveltip CRM
//               </a>
//             </div>

//             <p style="font-size:14px; line-height:1.7;">
//               If this is your first time logging in, please follow any
//               password setup or OTP verification instructions shown on
//               the login page.
//             </p>

//             <p style="font-size:14px; line-height:1.7;">
//               If you face any login issues, please contact your CRM
//               administrator for assistance.
//             </p>

//             <p style="font-size:15px; margin-top:25px;">
//               Best Regards,<br>
//               <strong>Traveltip CRM Team</strong>
//             </p>
//           </div>

//           <!-- Footer -->
//           <div style="background:#f3f6fb; padding:18px;
//                       text-align:center; font-size:12px; color:#64748b;">
//             <p style="margin:0;">
//               This email was sent because a Traveltip CRM account
//               was created for you.
//             </p>
//             <p style="margin:8px 0 0;">
//               &copy; ${new Date().getFullYear()} Traveltip. All rights reserved.
//             </p>
//           </div>

//         </div>
//       </body>
//       </html>
//     `,
// });

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[char]);
}

console.log(result);


  res.sendFile(realPath)
});
module.exports=userRouter







