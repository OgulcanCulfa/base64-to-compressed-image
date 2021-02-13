const fs = require("fs");
const Jimp = require("jimp");

async function compress() {

  fs.readFile("image/1003880.png", { encoding: "base64" }, (err, data) => {
    
    if (err) throw err;
    const imgBuff = data.replace(/^data:image\/\w+;base64,/, "");
    const buff = Buffer.from(imgBuff, "base64");
    const name = "buffer_ornek.jpeg";

    Jimp.read(buff, (err, img) => {
      if (err) throw err;

      img
        .resize(256, 256)
        .quality(60)
        .write("./compressed/" + name);
    });
  });
}

compress();
