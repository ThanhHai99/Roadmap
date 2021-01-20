/**
 * Flow là một tiện ích để kiểm tra các loại của dev javascript tại Facebook.
 * Nó hoạt động ở 2 chế độ: ở chế độ đầu tiên, nó thực hiện một phân tích tĩnh, như eslint.
 * Một ví dụ nhỏ sẽ là:
 */
// function multi(x) {
// 	return x * 10;
// }

// multi("10px");

/**
 * Nhưng nhiều lỗi bị ẩn khỏi Flow trong chế độ này.
 * Vì vậy, để khắc phục Flow này cung cấp các khai báo kiểu cho javascript
 * Để tránh bước chuyển đoạn, bạn có thể viết các loại Luồng trong nhận xét,
 * nhưng không thể đọc được. 
 * Một tùy chọn khác là sử dụng “extended javascript”
 * Tại sao nó là “javascript mở rộng” mà không phải là một ngôn ngữ mới?
 * Đơn giản - Flow không thêm syntax sugar.
 */

const myPoint = {
	x: 1,
	y: 2
};
console.log(myPoint.x, myPoint.y);
