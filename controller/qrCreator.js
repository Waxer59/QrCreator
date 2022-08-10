const { response } = require("express");
var qr = require("qr-image");

const createQr= (req, res = response) => {
  const { txt } = req.headers;
  try {
    var code = qr.image(txt, { type: "svg" ,size:"5"});
    res.setHeader("Content-type", "image/png"); //sent qr image to client side
    code.pipe(res)
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Talk with an administrator",
    });
  }
};

module.exports = {
  createQr,
};
