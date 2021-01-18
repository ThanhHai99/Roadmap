import fs from "fs";
import formidable from "formidable";
import path from "path";
import { v4 as uuidv4 } from "uuid";

let postSingleUpload = (req, res) => {
  // Khởi tạo biến form bằng IncomingForm để phân tích một tập tin tải lên
  let form = new formidable.IncomingForm();

  // Cấu hình thư mục sẽ chứa file trên server với hàm .uploadDir
  form.uploadDir = "src/uploads/";

  // Xử lý upload file với hàm .parse
  form.parse(req, (err, fields, files) => {
    if (err) throw err;
    // Lấy ra đường dẫn tạm của tệp tin trên server
    let tmpPath = files.file.path;
    // Khởi tạo đường dẫn mới, mục đích để lưu file vào thư mục uploads của chúng ta
    let newPath = form.uploadDir + uuidv4() + path.extname(files.file.name);
    // Đổi tên của file tạm thành tên mới và lưu lại
    fs.rename(tmpPath, newPath, (err) => {
      if (err) throw err;
      
      switch (files.file.type) {
        // Kiểm tra nếu như là file ảnh thì render ảnh và hiển thị lên.
        case "image/jpeg":
          fs.readFile(newPath, (err, fileUploaded) => {
            res.writeHead(200,{"Content-type":"image/jpeg"});
            res.end(fileUploaded);
          });
          break;
        // Còn lại các loại file khác thì chỉ hiển thị nội dung thông báo upload thành công.
        default:
          res.writeHead(200, {"Content-Type": "text/html"});
          res.end(`Upload file <strong>${files.file.name}</strong> successfuly`);
          break;
      }
    });
  });
};

module.exports = {
  postSingleUpload
}
