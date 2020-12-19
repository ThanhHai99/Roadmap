const sendMailContent = {
  subject: "ThanhHai App: Xác nhận kích hoạt tài khoản.",
  template: (linkVerify) => {
    return `
            <h2>Bạn nhận được email này vì đã đăng ký tài khoản trên ứng dụng ThanhHai App.</h2>
            <h3>Vui lòng click vào liên kết bên dưới để xác nhận kích hoạt tài khoản.</h3>
            <h3><a href="${linkVerify}" target="blank">${linkVerify}</a></h3>
            <h4>Nếu tin rằng email này là nhầm lẫn, hãy bỏ qua nó. Trân trọng.</h4>
        `;
  }
};

module.exports = {
  sendMailContent
};
