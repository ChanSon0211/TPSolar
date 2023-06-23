import CustomerUsed from "../components/Home/CustomerUsed";
import FlashSale from "../components/Home/FlashSale";
import Media from "../components/Home/Media";
import Feedback from "../components/Home/Feedback";
// import Footer from "../components/Home/Footer";
import "../components/Home/HomePage.css";
import Category from "../components/Home/Category";
import News from "../components/Home/News";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import CarouselSlice from "../components/Carousel/CarouselSlice";

import Slidebar from "../components/Slidebar/Slidebar";


export default function HomePage() {
  return (
    <div className="bg-main">
      <Header />
      <CarouselSlice />
      <Slidebar />
      <FlashSale />
      <Category />
      <Media />
      <Feedback />
      <CustomerUsed />
      <News />
      <Footer />
    </div>
  );
}
