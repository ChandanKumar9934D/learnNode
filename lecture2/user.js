const fs=require("fs")
const UserApp=((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>server created</title></head>");
    res.write("<h3><h1>welcome to home page</h1>");
    res.write("</h3>enter your details</h3>");
    res.write("<form action='/submit' method='POST'>");
    res.write("<label for='name'>Name :</label>");
    res.write(
      "<input type='text' name='name' id='name' palceholder='enter your name'/>"
    );
    res.write("<label for='male'>Male :</label>");
    res.write(" <input type='radio' name='gender' id='male' value='male' />");
    res.write("<label for='female'>Female :</label>");
    res.write("<input type='radio' name='gender' value='female' id='female' />");
    res.write("<button type='submit'>Submit</button>");
    res.write("</label>");
    res.write("</body>");
    res.write("</head>");
    return res.end();
  } else if (req.url.toLowerCase() === "/submit" && req.method == "POST") {
    const data = [];
    req.on("data", (chenks) => {
      data.push(chenks)
    
    });
    req.on("end",()=>{
      const fullBody= Buffer.concat(data).toString()
      const parame=new URLSearchParams(fullBody)
      const objectData=Object.fromEntries(parame)
      console.log(objectData);
      
      fs.writeFileSync("data.text", JSON.stringify(objectData));
    })
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  } else if (req.url === "/submit") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>server created</title></head>");
    res.write("<body><h1>welcome to about page</h1></body>");
    res.write("</head>");
    return res.end();
  }
});
module.exports=UserApp;