import CardHome from "../Card/CardHome";
import { NewsData } from "./DataPageHome";

export default function News() {
  return (
    <CardHome title="dự án và hoạt động">
      <div className="row">
        <div className="col-md-6 col-tbs-12">
          <div className="item_grid mb-3 mb-md-0">
            <div className="relative">
              <a href="/" title="" className="">
                <div className="w-100 px-[25px]">
                  <img
                    src="https://bizweb.dktcdn.net/100/463/111/articles/do-sang-cua-den-nang-luong-mat-troi.png?v=1686814248947"
                    className="d-block img-cover"
                    alt=""
                  />
                </div>
              </a>

              <div className="border-tag absolute text-center top-0 left-0 z-[10] text-white bg-[var(--mainColor2)] py-[25px] pl-[10px] pr-[40px]">
                <p className="font-bold">15</p>
                <p className="">06/2023</p>
              </div>
            </div>
            <div className="cont">
              <h3 className="font-bold  my-[0.8em] text-[1.2em] ">
                <a
                  className="line-1"
                  href="/nhung-yeu-to-nao-anh-huong-den-hieu-suat-chieu-sang-cua-den-nang-luong-mat-troi"
                  title="Những yếu tố nào ảnh hưởng đến hiệu suất chiếu sáng của đèn năng lượng mặt trời?"
                >
                  Những yếu tố nào ảnh hưởng đến hiệu suất chiếu sáng của đèn
                  năng lượng mặt trời?
                </a>
              </h3>

              <div className="line-2 text-justify">
                Trong quá trình sử dụng đèn năng lượng mặt trời, chắc hẳn bạn đã
                gặp trường hợp tình trạng đèn sáng yếu hoặc không hoạt động. Vậy
                bạn có thắc mắc độ sáng của đèn phụ thuộc vào yếu tố nào? Hãy
                tham khảo bài viết dưới đây của TP Solar để biết những yếu tố
                ảnh hưởng đến hiệu suất chiếu sáng của đèn năng lượng mặt trời
                nhé! Lumen - chỉ số quan trọng khi chọn đèn năng lượng mặt trời
                Khi lựa chọn đèn năng lượng mặt trời có điều khiển, mọi người
                thường hay để ý đến công...
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-tbs-12">
          {NewsData.map((item, index) => (
            <article className="blog-item-list clearfix mb-3 row" id={index}>
              <div className="col-4 col-lg-3 mr-0">
                <a
                  href="#news"
                  className="w-[160px] overflow-hidden block rounded-[10px]"
                  title={item.image}
                >
                  <img
                    src={item.image}
                    alt=""
                    className="w-100 h-100 zoom-image"
                  />
                </a>
              </div>
              <div className="col-8 col-lg-9">
                <h3 className="font-bold text-[1.1em]">
                  <a className="line-1" href="#title" title="">
                    {item.title}
                  </a>
                </h3>
                <div className="text-[1em] text-[#5e5e5e] ">{item.date}</div>

                <div className="line-2 h-auto text-justify">{item.content}</div>
              </div>
            </article>
          ))}

          <div className="text-center w-100">
            <a
              href="#thongtin"
              title="Xem thêm"
              className="font-bold btn-home block"
            >
              Xem thêm
            </a>
          </div>
        </div>
      </div>
    </CardHome>
  );
}
