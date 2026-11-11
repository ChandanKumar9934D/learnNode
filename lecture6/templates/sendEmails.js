const dewaliWish = () =>
    `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>

    <body style="margin:0;padding:30px 10px;background:#fff8ed;
                 font-family:Arial,sans-serif;color:#333;">

        <div style="max-width:600px;margin:auto;background:#ffffff;
                    border-radius:12px;overflow:hidden;">

            <!-- Header -->
            <div style="background:#8b2500;padding:35px 20px;
                        text-align:center;color:#ffffff;">

                <div style="font-size:48px;">🪔</div>

                <h1 style="margin:15px 0 5px;font-size:30px;">
                    Happy Diwali!
                </h1>

                <p style="margin:0;color:#ffe4bd;font-size:15px;">
                    Festival of Lights
                </p>

            </div>

            <!-- Main Content -->
            <div style="padding:35px 30px;text-align:center;">

                <h2 style="color:#b45309;margin-top:0;">
                    Dear Valued Team Member,
                </h2>

                <p style="font-size:16px;line-height:1.9;color:#444;">
                    May this Diwali bring new hopes, endless happiness,
                    success, and prosperity into your life.
                </p>

                <p style="font-size:16px;line-height:1.9;color:#444;">
                    May the light of thousands of diyas brighten your
                    future and fill every moment with joy and positivity.
                </p>

                <div style="background:#fff5e5;border:1px solid #f5d6a5;
                            border-radius:10px;padding:22px;
                            margin:28px 0;">

                    <div style="font-size:35px;">
                        ✨ 🪔 ✨
                    </div>

                    <h2 style="color:#a33a00;margin:12px 0;">
                        Wishing You and Your Family
                    </h2>

                    <h2 style="color:#d97706;margin:0;">
                        A Very Happy Diwali!
                    </h2>

                </div>

                <p style="font-size:15px;line-height:1.8;color:#555;">
                    Thank you for being a valued part of the
                    Traveltip family. We wish you continued success
                    and a wonderful festive season.
                </p>

                <p style="font-size:16px;margin-top:30px;color:#333;">
                    Warm Regards,<br>
                    <strong style="color:#8b2500;">
                        Team Traveltip
                    </strong>
                </p>

            </div>

            <!-- Footer -->
            <div style="background:#fff1dc;padding:20px;
                        text-align:center;font-size:12px;color:#80552e;">

                Spreading happiness, light and positivity.

                <br><br>

                &copy; ${new Date().getFullYear()}
                Traveltip. All Rights Reserved.

            </div>

        </div>

    </body>
    </html>
    `

function escapeHtml(value = "") {
    return String(value).replace(/[&<>"']/g, (char) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[char]);
}


const createNewUser = (name, userId, password, department, designation, team, loginUrl) => (
    `
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

            <!-- Header -->
            <div style="background:#123c69;padding:30px;
                        text-align:center;color:#ffffff;">

                <h1 style="margin:0;font-size:26px;">
                    Traveltip CRM
                </h1>

                <p style="margin:10px 0 0;color:#dbeafe;">
                    User Account Information
                </p>

            </div>

            <!-- Body -->
            <div style="padding:30px;">

                <h2 style="color:#123c69;margin-top:0;">
                    Welcome, ${escapeHtml(name)}!
                </h2>

                <p style="font-size:15px;line-height:1.8;">
                    Your Traveltip CRM account has been successfully
                    created by the administrator.
                </p>

                <p style="font-size:15px;line-height:1.8;">
                    You can now access the CRM using the login
                    credentials provided below.
                </p>

                <!-- Account Details -->
                <div style="background:#f0f7ff;
                            border:1px solid #d6e8ff;
                            border-radius:8px;padding:20px;
                            margin:24px 0;">

                    <h3 style="margin:0 0 18px;color:#123c69;">
                        Your Account Details
                    </h3>

                    <p><strong>Name:</strong>
                        ${escapeHtml(name)}
                    </p>

                    <p><strong>User ID:</strong>
                        ${escapeHtml(userId)}
                    </p>
                    <p><strong>OTP:</strong>
                        1234
                    </p>

                    <p><strong>Department:</strong>
                        ${escapeHtml(department)}
                    </p>

                    <p><strong>Designation:</strong>
                        ${escapeHtml(designation)}
                    </p>

                    <p><strong>Team / Branch:</strong>
                        ${escapeHtml(team)}
                    </p>

                    <hr style="border:none;border-top:1px solid #d6e8ff;
                               margin:18px 0;">

                    <p><strong>Temporary Password:</strong></p>
                    

                    <div style="background:#ffffff;padding:12px;
                                border-radius:5px;font-size:16px;
                                font-weight:bold;color:#123c69;
                                word-break:break-word;">
                        ${escapeHtml(password)}
                    </div>

                </div>

                <!-- Login Button -->
                <div style="text-align:center;margin:30px 0;">

                    <a href="${escapeHtml(loginUrl)}"
                       style="background:#1677ff;color:#ffffff;
                              text-decoration:none;padding:14px 32px;
                              border-radius:6px;display:inline-block;
                              font-weight:bold;font-size:15px;">

                        Login to Traveltip CRM

                    </a>

                </div>

                <!-- Security Notice -->
                <div style="background:#fff8e6;
                            border-left:4px solid #f0ad28;
                            padding:15px;margin:20px 0;">

                    <strong>Security Notice</strong>

                    <p style="font-size:13px;line-height:1.7;margin-bottom:0;">
                        Please keep your login credentials confidential.
                        For security reasons, change your temporary
                        password after your first login, if password
                        changing is enabled in your account.
                    </p>

                </div>

                <p style="font-size:14px;line-height:1.7;">
                    If you face any login issues, please contact
                    your CRM administrator.
                </p>

                <p style="font-size:15px;margin-top:25px;">
                    Best Regards,<br>
                    <strong>Traveltip CRM Team</strong>
                </p>

            </div>

            <!-- Footer -->
            <div style="background:#f3f6fb;padding:18px;
                        text-align:center;font-size:12px;color:#64748b;">

                This email was sent because a Traveltip CRM account
                was created for you.

                <br><br>

                &copy; ${new Date().getFullYear()}
                Traveltip. All rights reserved.

            </div>

        </div>

    </body>
    </html>
    `
)

const informToCounsellors = () => (
    `

<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Important CRM Process Update</title>
</head>

<body style="margin:0; padding:0; background-color:#f4f6f9; font-family:Arial,Helvetica,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" border="0"
         style="background-color:#f4f6f9; padding:30px 10px;">
    <tr>
      <td align="center">

        <table width="600" cellpadding="0" cellspacing="0" border="0"
               style="max-width:600px; width:100%; background-color:#ffffff; border-radius:8px; overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="background-color:#123b63; padding:25px 30px; text-align:center;">
              <h2 style="color:#ffffff; margin:0; font-size:24px;">
                Traveltip Internal CRM
              </h2>
              <p style="color:#dce8f5; margin:8px 0 0; font-size:14px;">
                Important Process Update
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding:30px; color:#333333; font-size:15px; line-height:1.7;">

              <p>Dear Tourist Visa Counsellors,</p>

              <p>
                We are pleased to inform you that the following workflows
                are now working in our Internal CRM:
              </p>

              <ul style="padding-left:22px;">
                <li>Branch Manager</li>
                <li>Feedback Team</li>
                <li>Filing Manager</li>
                <li>Embassy</li>
                <li>Auditor</li>
              </ul>

              <p>
                All Tourist Visa Counsellors are requested to forward
                their respective files to the <strong>Branch Manager</strong>
                through the Internal CRM once all the following conditions
                have been fulfilled:
              </p>

              <!-- Conditions -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0"
                     style="background-color:#f0f7ff; border-left:4px solid #1976d2; margin:20px 0;">
                <tr>
                  <td style="padding:18px 20px;">

                    <p style="margin:0 0 12px; font-weight:bold; color:#123b63;">
                      Required Conditions:
                    </p>

                    <p style="margin:8px 0;">
                      &#10003; The Feedback Team has created the company email.
                    </p>

                    <p style="margin:8px 0;">
                      &#10003; Agreement Status is <strong>Approved</strong>.
                    </p>

                    <p style="margin:8px 0;">
                      &#10003; <strong>Pending Before Visa = 0</strong>.
                    </p>

                  </td>
                </tr>
              </table>

              <p>
                Once all the above conditions are met, please ensure that
                the file is forwarded to the respective Branch Manager
                for further processing.
              </p>

              <p>
                Kindly follow this process for every eligible Tourist Visa
                file and ensure that no eligible file remains pending
                at the counsellor level.
              </p>

              <p>
                Thank you for your cooperation.
              </p>

              <p style="margin-top:25px;">
                Regards,<br>
                <strong>CRM Team</strong><br>
                Traveltip
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#f1f3f5; padding:15px 25px; text-align:center;">
              <p style="margin:0; color:#777777; font-size:12px;">
                This is an official process update from Traveltip.
                Please follow the instructions in the Internal CRM.
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>

`
)

const newUpdate=()=>(
    `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CRM Panel Activation</title>
</head>

<body style="margin:0; padding:0; background-color:#f4f6f9; font-family:Arial,Helvetica,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" border="0"
       style="background-color:#f4f6f9; padding:30px 10px;">
  <tr>
    <td align="center">

      <table width="600" cellpadding="0" cellspacing="0" border="0"
             style="max-width:600px; width:100%; background-color:#ffffff; border-radius:8px; overflow:hidden;">

        <!-- Header -->
        <tr>
          <td align="center"
              style="background-color:#123b63; padding:25px 20px;">
            <h2 style="margin:0; color:#ffffff; font-size:24px;">
              Traveltip Internal CRM
            </h2>
            <p style="margin:8px 0 0; color:#dce8f5; font-size:14px;">
              Important Team Announcement
            </p>
          </td>
        </tr>

        <!-- Main Content -->
        <tr>
          <td style="padding:30px; color:#333333; font-size:15px; line-height:1.7;">

            <p>Dear Team,</p>

            <p>
              This is to inform all <strong>Auditors, Filing Managers,Feedback,
              and Embassy Team members</strong> that your respective
              panels are now available in our Traveltip Internal CRM.
            </p>

            <p>
              All team members are requested to start using their
              respective CRM panels for daily work and file processing.
            </p>

            <!-- Login Details -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0"
                   style="background-color:#f0f7ff; border-left:4px solid #1976d2; margin:20px 0;">
              <tr>
                <td style="padding:20px;">

                  <h3 style="margin:0 0 15px; color:#123b63; font-size:18px;">
                    CRM Login Details
                  </h3>

                  <p style="margin:8px 0;">
                    <strong>CRM Portal:</strong>
                    <a href="https://crm.thetraveltip.co"
                       style="color:#1976d2; text-decoration:none;">
                      crm.thetraveltip.co
                    </a>
                  </p>

                  <p style="margin:8px 0;">
                    <strong>Username:</strong>
                    Your registered company email address
                  </p>

                  <p style="margin:8px 0;">
                    <strong>OTP:</strong> 1234
                  </p>

                </td>
              </tr>
            </table>

            <!-- Support Details -->
            <h3 style="color:#123b63; font-size:18px;">
              Facing Any Issue?
            </h3>

            <p>
              If you face any issue while logging in or using your CRM
              panel, please contact the CRM Team using the details below:
            </p>

            <table width="100%" cellpadding="0" cellspacing="0" border="0"
                   style="background-color:#f8f9fa; margin:15px 0;">
              <tr>
                <td style="padding:18px 20px;">

                  <p style="margin:8px 0;">
                    <strong>Email:</strong>
                    chandan@traveltip.co
                  </p>

                  <p style="margin:8px 0;">
                    <strong>Contact No.:</strong>
                    +91-7814076882
                  </p>

                </td>
              </tr>
            </table>

            <p>
              Please share a brief description of the issue along with
              a screenshot, if possible, so that the CRM Team can assist you.
            </p>

            <p>
              Kindly start using your respective panels and ensure that
              all work is processed through the Internal CRM.
            </p>

            <p>Thank you for your cooperation.</p>

            <p style="margin-top:25px;">
              Regards,<br>
              <strong>CRM Team</strong><br>
              Traveltip
            </p>

          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td align="center"
              style="background-color:#f1f3f5; padding:15px 20px;">
            <p style="margin:0; color:#777777; font-size:12px;">
              This is an official communication from Traveltip.
              Please use your respective CRM panel for daily operations.
            </p>
          </td>
        </tr>

      </table>

    </td>
  </tr>
</table>

</body>
</html>
`
)
module.exports = { dewaliWish, createNewUser, informToCounsellors ,newUpdate};
