 const dewaliWish=()=>
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

  
const createNewUser=(name,userId,password,department,designation,team,loginUrl)=>(
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
module.exports = {dewaliWish,createNewUser};
