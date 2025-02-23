const addition = (req, res) => {
  const data = [];

  req.on("data", (chunks) => {
    data.push(chunks);
  });
  req.on("end", () => {
    const body = Buffer.concat(data).toString();
    const params = new URLSearchParams(body);
    const fullBody = Object.fromEntries(params);
    const input1 = Number(fullBody.input1);
    const input2 = Number(fullBody.input2);
    let sum = input1 + input2;
    console.log(sum);
    // res.setHeader("Content-Type", "text/html");
    res.write(`
        <html lang="en">
<head>
   
    <title>Document</title>
</head>
<body>
   result is ${sum}
</body>
</html>
        `);
    // res.write("<head><title>calculate result</title></head>");
    // res.write(`<body><h1>your result is : ${sum}</h1></body>`);
    // res.write("</head>");
    return res.end();
  });
};
module.exports = addition;
