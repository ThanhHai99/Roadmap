import multipleUploadMiddleware from "../middleware/multipleUploadMiddleware";

let debug = console.log.bind(console);

let multipleUpload = async (req, res) => {
  try {
    // thực hiện upload
    await multipleUploadMiddleware(req, res);

    // Nếu upload thành công, thì tất cả file được lưu trong biến req.files
    debug(req.files);

    // Kiểm tra thêm một bước nữa, nếu như không có file nào được gửi lên thì trả về thông báo cho client
    if (req.files.length <= 0) {
      return res.send(`You must select at least 1 file or more.`);
    }

    // Thông báo thành công.
    return res.send(`Your files has been uploaded.`);
  } catch (error) {
    // Debug lỗi xem là gì ở đây
    debug(error);

    // Lỗi vượt quá số lượng file cho phép tải lên trong 1 lần
    if (error.code === "LIMIT_UNEXPECTED_FILE") {
      return res.send(`Exceeds the number of files allowed to upload.`);
    }

    return res.send(`Error when trying upload many files: ${error}}`);
  }
};

module.exports = {
  multipleUpload: multipleUpload
};
