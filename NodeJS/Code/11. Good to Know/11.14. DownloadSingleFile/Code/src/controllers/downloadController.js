import fs from "fs";
import mime from "mime";
import path from "path";

let getDownload = (req, res) => {
  const file = `${__dirname}` + `/../data/bi.txt`;
  
  const fileName = path.basename(file);
  const mimetype = mime.getType(file);
  
  res.setHeader('Content-disposition', 'attachment; filename=' + fileName);
  res.setHeader('Content-type', mimetype);

  const fileStream = fs.createReadStream(file);
  return fileStream.pipe(res);

  // Ngắn gọn :vvv
  // let filePath = path.resolve(__dirname, "..", "data\\bi.txt");
  // // .. là trỏ về path của folder cha
  // return res.download(filePath);
};

module.exports = getDownload;
