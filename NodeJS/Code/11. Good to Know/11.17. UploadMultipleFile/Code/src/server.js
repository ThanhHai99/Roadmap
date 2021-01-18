import express from "express";
import initRoutes from "./routes/web";

const app = express();

// Cho phép lý dữ liệu từ form method POST
app.use(express.urlencoded({extended: true}));

// Khởi tạo các routes cho ứng dụng
initRoutes(app);

// chọn một port mà bạn muốn và sử dụng để chạy ứng dụng tại local
let port = process.env.PORT || 1999;
app.listen(port, () => {
  console.log(`Server running at localhost:${port}/`);
});
