import util from "util";
import path from "path";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";

// Khởi tạo biến cấu hình cho việc lưu trữ file upload
let storage = multer.diskStorage({
  // Nơi file upload sẽ được lưu lại
  destination: (req, file, callback) => {
    callback(null, path.join(`${__dirname}/../../src/uploadResults`));
  },
  filename: (req, file, callback) => {
    // Có thể làm bất kỳ điều gì với cái file nhé.
    // Ví dụ chỉ cho phép tải lên các loại ảnh png & jpg
    let math = ["image/png", "image/jpeg"];
    if (math.indexOf(file.mimetype) === -1) {
      let errorMess = `The file <strong>${file.originalname}</strong> is invalid. Only allowed to upload image jpeg or png.`;
      return callback(errorMess, null);
    }

    // Tên file thì nối thêm nhãn thời gian (hoặc dùng uuid) để tránh bị trùng tên file.
    let filename = `${uuidv4()}${path.extname(file.originalname)}`;
    callback(null, filename);
  }
});

// Khởi tạo middleware uploadManyFiles với cấu hình như ở trên,
// Bên trong hàm .array() truyền vào name của thẻ input, ở đây mình đặt là "many-files", và tham số thứ hai là giới hạn số file được phép upload mỗi lần, mình sẽ để là 17 (con số mà mình yêu thích). Các bạn thích để bao nhiêu cũng được.
let uploadManyFiles = multer({ storage: storage }).array("many-files", 17);

// Mục đích của util.promisify() là để bên controller có thể dùng async-await để gọi tới middleware này
let multipleUploadMiddleware = util.promisify(uploadManyFiles);

module.exports = multipleUploadMiddleware;
