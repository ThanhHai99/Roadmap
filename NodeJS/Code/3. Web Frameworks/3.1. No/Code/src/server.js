let http = require("http");
let url = require("url");
let fs = require("fs");
let formidable = require("formidable");
 
let server = http.createServer((req, res) => {
    // Kiểm tra nếu như url truyền lên là /upload và phương thức là post
    if (req.url == "/upload" && req.method.toLowerCase() == "post") {
      // Khởi tạo biến form bằng IncomingForm để phân tích một tập tin tải lên
      let form = new formidable.IncomingForm();

      // Cấu hình thư mục sẽ chứa file trên server với hàm .uploadDir
      form.uploadDir = "src/uploads/"

      // Xử lý upload file với hàm .parse
      form.parse(req, (err, fields, files) => {
        if (err) throw err;
        // Lấy ra đường dẫn tạm của tệp tin trên server
        let tmpPath = files.file.path;
        // Khởi tạo đường dẫn mới, mục đích để lưu file vào thư mục uploads của chúng ta
        let newPath = form.uploadDir + files.file.name;
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

      // Return ở đây để code không chạy tiếp xuống dưới
      return;
    }

    // Nếu không phải action upload thì trả về client cái form upload
    let urlData = url.parse(req.url, true);
    let fileName = "./src/views" + urlData.pathname;
    if(urlData.pathname === "/") {
        fileName = "./src/views/master.html";
    }
    fs.readFile(fileName, (err, data) => {
      if(err) {
        console.log(err);
        res.writeHead(404, {"Content-Type": "text/html"});
        res.write("404 Not Found");
        return res.end();
      }
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(data);
      return res.end();
    });
});

let host = "localhost";
let port = process.env.PORT || 1999;
server.listen(port, host, () => {
  console.log(`Server running at ${host}:${port}/`);
});