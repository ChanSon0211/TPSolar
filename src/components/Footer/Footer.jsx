import React from "react";
import "../../assets/variables.css";
import "bootstrap/dist/css/bootstrap.css";
import "./Footer.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { BsFillTelephoneFill } from "react-icons/bs";
// Import các biểu tượng cần thiết
library.add(faUser, faEnvelope);

export const Footer = () => {
  return (
    <div class="col-right position-relative">
      <footer className="bg-white pt-5">
        <div className="foo_mid mb-4">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 footer-left">
                <a
                  href="/"
                  title="TP Solar - Đèn Năng Lượng Mặt Trời Chính Hãng"
                  className="logo_foo d-block mb-2"
                >
                  <img
                    alt="Logo TP Solar - Đèn Năng Lượng Mặt Trời Chính Hãng"
                    className="lazy loaded max-w-[215px]"
                    src="//bizweb.dktcdn.net/100/463/111/themes/889675/assets/logo_foo.png?1685679333702"
                    data-src="//bizweb.dktcdn.net/100/463/111/themes/889675/assets/logo_foo.png?1685679333702"
                  />
                </a>
                <p className="adr">
                  <b>CÔNG TY CỔ PHẦN TP SOLAR </b>
                </p>
                <p className="adr">
                  Giấy chứng nhận Đăng ký Kinh doanh số 0109008737 do Sở Kế
                  hoạch và Đầu tư Thành phố Hà Nội cấp ngày 29/11/2019
                </p>

                <p className="adr">
                  <i className="fa fa-envelope-o" aria-hidden="true"></i> Email:{" "}
                  <a href="mailto:hotro@tpsolar.vn" title="hotro@tpsolar.vn">
                    hotro@tpsolar.vn
                  </a>
                </p>

                <p className="adr">
                  <i className="fa fa-home" aria-hidden="true"></i> Trụ sở:
                  C61-20, KĐT Geleximco, Đường Lê Trọng Tấn, Phường Dương Nội,
                  Quận Hà Đông, Thành Phố Hà Nội, Việt Nam
                </p>

                <p className="adr">
                  <i className="fa fa-home" aria-hidden="true"></i> Cơ sở Miền
                  Bắc: C03-40, KĐT Geleximco, Đường Lê Trọng Tấn, Phường Dương
                  Nội, Quận Hà Đông, Thành Phố Hà Nội, Việt Nam
                </p>

                <p className="adr">
                  <i className="fa fa-home" aria-hidden="true"></i> Cơ sở Miền
                  Nam: 75 Võ Nguyên Giáp, Phước Tân, Biên Hòa, Đồng Nai
                </p>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-xs-12 footer-left">
                <p>
                  <b>HOTLINE BÁN HÀNG: </b>
                  <br />
                  <a
                    className="phone flex items-center"
                    href="tel:0363993993"
                    title="0363 993 993"
                  >
                    <BsFillTelephoneFill className="text-red pr-[7px]" /> 0363
                    993 993
                  </a>
                </p>
                <br />
                <p>
                  <b>TỔNG ĐÀI MIỄN PHÍ: </b>
                  <br />
                  <a
                    className="phone flex items-center"
                    href="tel:1800646450"
                    title="1800 64 64 50"
                  >
                    <BsFillTelephoneFill className="text-red pr-[7px]" /> 1800
                    64 64 50
                  </a>
                </p>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12 footer-left">
                <h3 className="footer-title mb-2 position-relative font-weight-bold">
                  Chính sách
                </h3>
                <ul className="links">
                  <li>
                    <a
                      href="https://tpsolar.vn/chinh-sach-bao-hanh"
                      title="Chính sách bảo hành"
                    >
                      Chính sách bảo hành
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://tpsolar.vn/chinh-sach"
                      title="Chính sách bảo mật"
                    >
                      Chính sách bảo mật
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://tpsolar.vn/chinh-sach-van-chuyen"
                      title="Chính sách vận chuyển"
                    >
                      Chính sách vận chuyển
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://tpsolar.vn/chinh-sach-doi-tra"
                      title="Chính sách đổi trả"
                    >
                      Chính sách đổi trả
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://tpsolar.vn/dieu-khoan"
                      title="Quy định sử dụng"
                    >
                      Quy định sử dụng
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://tpsolar.vn/chinh-sach-thanh-toan"
                      title="Chính sách thanh toán"
                    >
                      Chính sách thanh toán
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://tpsolar.vn/chinh-sach-kiem-hang"
                      title="Chính sách kiểm hàng"
                    >
                      Chính sách kiểm hàng
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12 footer-left">
                <h3 className="footer-title mb-2 position-relative font-weight-bold">
                  Phương thức thanh toán
                </h3>

                <div className="footer-column-1 ">
                  <div className="payment-accept flex gap-4">
                    <img
                      className="first lazy loaded"
                      src="//bizweb.dktcdn.net/100/463/111/themes/889675/assets/payment-1.png?1685679333702"
                      data-src="//bizweb.dktcdn.net/100/463/111/themes/889675/assets/payment-1.png?1685679333702"
                      alt="payment-1"
                    />

                    <img
                      className="lazy loaded"
                      src="//bizweb.dktcdn.net/100/463/111/themes/889675/assets/payment-2.png?1685679333702"
                      data-src="//bizweb.dktcdn.net/100/463/111/themes/889675/assets/payment-2.png?1685679333702"
                      alt="payment-2"
                    />
                  </div>
                </div>

                <a
                  href="http://online.gov.vn/Home/WebDetails/99177"
                  target="_blank"
                >
                  <img
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    data-src="//bizweb.dktcdn.net/100/463/111/themes/889675/assets/logo_bct.png?1685679333702"
                    alt="bct"
                    //   style="max-width:60%; margin-top:20px"
                  />
                </a>
              </div>
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 footer-left">
                <h3 className="footer-title mb-3 position-relative font-weight-bold">
                  Kết nối với chúng tôi
                </h3>
                <div className="onut pb-2">
                  <a
                    href="https://shopee.vn/tpsolar_vn"
                    target="_blank"
                    className="position-relative iso sitdown modal-open d-inline-block mr-[10px]"
                  >
                    <img
                      className="lazy loaded"
                      src="//bizweb.dktcdn.net/100/463/111/themes/889675/assets/shopee_mall.png?1685679333702"
                      data-src="//bizweb.dktcdn.net/100/463/111/themes/889675/assets/shopee_mall.png?1685679333702"
                      alt="shopee_mall"
                      width="150"
                    />
                  </a>
                  <a
                    href="https://www.lazada.vn/shop/tpsolar/"
                    target="_blank"
                    className="position-relative iso sitdown modal-open d-inline-block mr-[10px]"
                  >
                    <img
                      className="lazy loaded"
                      src="//bizweb.dktcdn.net/100/463/111/themes/889675/assets/lazmall.png?1685679333702"
                      data-src="//bizweb.dktcdn.net/100/463/111/themes/889675/assets/lazmall.png?1685679333702"
                      alt="lazmall_mall"
                      width="150"
                    />
                  </a>
                  <a
                    href="https://www.sendo.vn/shop/tp-solar"
                    target="_blank"
                    className="position-relative iso sitdown modal-open d-inline-block mr-[10px]"
                  >
                    <img
                      className="lazy loaded"
                      src="//bizweb.dktcdn.net/100/463/111/themes/889675/assets/senmaill.png?1685679333702"
                      data-src="//bizweb.dktcdn.net/100/463/111/themes/889675/assets/senmaill.png?1685679333702"
                      alt="senmaill_mall"
                      width="150"
                    />
                  </a>
                  <a
                    href="https://tiki.vn/cua-hang/thien-phu-solar"
                    target="_blank"
                    className="position-relative iso sitdown modal-open d-inline-block mr-[10px]"
                  >
                    <img
                      className="lazy loaded"
                      src="//bizweb.dktcdn.net/100/463/111/themes/889675/assets/tiki_official.png?1685679333702"
                      data-src="//bizweb.dktcdn.net/100/463/111/themes/889675/assets/tiki_official.png?1685679333702"
                      alt="senmaill_mall"
                      width="150"
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/tpsolarvietnam88"
                    target="_blank"
                    className="position-relative iso sitdown modal-open d-inline-block mr-[10px]"
                  >
                    <img
                      className="lazy loaded"
                      src="//bizweb.dktcdn.net/100/463/111/themes/889675/assets/face123.png?1685679333702"
                      data-src="//bizweb.dktcdn.net/100/463/111/themes/889675/assets/face123.png?1685679333702"
                      alt="senmaill_mall"
                      width="150"
                    />
                  </a>
                  <a
                    href="https://zalo.me/381692685563842179"
                    target="_blank"
                    className="position-relative iso sitdown modal-open d-inline-block mr-[10px]"
                  >
                    <img
                      className="lazy loaded"
                      src="//bizweb.dktcdn.net/100/463/111/themes/889675/assets/untitled-1447b9613548bd3d6.png?1685679333702"
                      data-src="//bizweb.dktcdn.net/100/463/111/themes/889675/assets/untitled-1447b9613548bd3d6.png?1685679333702"
                      alt="senmaill_mall"
                      width="150"
                      height="50"
                    />
                  </a>
                  <a
                    href="https://www.tiktok.com/@tpsolar68"
                    target="_blank"
                    className="position-relative iso sitdown modal-open d-inline-block mr-[10px]"
                  >
                    <img
                      className="lazy loaded"
                      src="//bizweb.dktcdn.net/100/463/111/themes/889675/assets/untitled-2727771956e4c3d13.png?1685679333702"
                      data-src="//bizweb.dktcdn.net/100/463/111/themes/889675/assets/untitled-2727771956e4c3d13.png?1685679333702"
                      alt="senmaill_mall"
                      width="150"
                      height="50"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="foo_mid border-top pt-4 pb-4">
            <ul className="links_sm list-unstyled row mb-0">
              <li className="col-6 col-sm-4 col-md-3 col-lg-2 m-0 text-[14px]">
                <a
                  href="https://tpsolar.vn/huong-dan"
                  title="Hướng dẫn mua hàng"
                >
                  Hướng dẫn mua hàng
                </a>
              </li>

              <li className="col-6 col-sm-4 col-md-3 col-lg-2 m-0 text-[14px]">
                <a
                  href="https://tpsolar.vn/huong-dan"
                  title="Hướng dẫn thanh toán"
                >
                  Hướng dẫn thanh toán
                </a>
              </li>

              <li className="col-6 col-sm-4 col-md-3 col-lg-2 m-0 text-[14px]">
                <a
                  href="https://tpsolar.vn/huong-dan"
                  title="Hướng dẫn giao nhận"
                >
                  Hướng dẫn giao nhận
                </a>
              </li>

              <li className="col-6 col-sm-4 col-md-3 col-lg-2 m-0 text-[14px]">
                <a
                  href="https://tpsolar.vn/dieu-khoan"
                  title="Điều khoản dịch vụ"
                >
                  Điều khoản dịch vụ
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="foo_bot pt-2 pb-2 border-top">
          <div className="container">
            <div className="row bgk align-items-center">
              <div className="col-12">
                <div className="coppyright">
                  Bản quyền thuộc về CÔNG TY CỔ PHẦN TP SOLAR.{" "}
                  <span>Cung cấp bởi Sapo.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
