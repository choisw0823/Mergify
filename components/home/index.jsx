import Header from "./Header";
import Banner from "../Banner";
import Footer from "./Footer";
import RegBanner from "../Block/Reg";
import About4 from "../About/About4";
import About6 from "../About/About6";
import About7 from "../About/About7";
import About8 from "../About/About8";
import Funfact from "../Fun-fact-counter/Funfact"
import CompanyFeatured from "../Company-featured/CompanyFeatured1"
import Filter from "../Company-featured/Filter";
import CompanyCategories from "../Company-categories/CompanyCategories1"
import Blog from "../News/News";
// import Subscribe from "../call-to-action/subcribe-box/Subscribe";
// import Blog4 from "../../components/blog/Blog4";
// import Testimonial6 from "../testimonial/Testimonial6";
// import Candidates3 from "../candidates/Candidates3";
// import Block9 from "../block/Block9";
// import JobFeatured8 from "../job-featured/JobFeatured8";
// import About6 from "../about/About6";
// import About7 from "../about/About7";
// import About8 from "../about/About8";
// import JobCategorie6 from "../job-categories/JobCategorie6";
import Partner from "../Partner/Partner";
import LoginPopup from "../common/form/login/LoginPopup";



import MobileMenu from "../header/MobileMenu";
import Link from "next/link";
import Block from "../block/Block1";
const index = () => {
  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>
      <LoginPopup/>
      <Header/>

      <MobileMenu />
      {/* End MobileMenu */}

      <Banner />
      {/* End Banner Section */}




{/* <!-- End Registeration Banners --> */}
      <section className="work-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>M&A 과정은 어떻게 되나요?</h2>
            {/* <div className="text">Job for anyone, anywhere</div> */}
          </div>
          {/* End sec-title */}

          <div className="row" data-aos="fade-up">
            <Block />
          </div>
        </div>
      </section>
      {/* <!-- End Work Section --> */}

      <About6/>
      <About7/>
      <About8/>


      <section className="about-section style-two">
        <div className="auto-container">
          <div className="row">
            <About4 />
          </div>

          {/* <!-- Fun Fact Section --> */}
          <div className="fun-fact-section">
            <div className="row">
              <Funfact />
            </div>
          </div>
          {/* <!-- Fun Fact Section --> */}
        </div>
      </section>
      {/* <!-- End About Section --> */}

      <section className="job-section">
        <div className="auto-container">
          <div className="sec-title-outer">
            <div className="sec-title">
              <h2>추천 매도건</h2>
              <div className="text">
                인수 희망 기업 추천 목록
              </div>
            </div>

            <div className="select-box-outer">
              <span className="icon fa fa-angle-down"></span>
              <Filter />
            </div>
          </div>
          {/* End sec-title-outer */}

          <div className="row " data-aos="fade-up">
            <CompanyFeatured />
          </div>

          <div className="btn-box">
            <Link
              href="/job-list-v5"
              className="theme-btn btn-style-one bg-blue"
            >
              <span className="btn-title">더보기</span>
            </Link>
          </div>
        </div>
      </section>
      {/* <!-- End Job Section --> */}


      
      <section className="job-categories ui-job-categories">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <h2>매도 기업 업종</h2>
                        <div className="text">
                            .
                        </div>
                    </div>

                    <div
                        className="row "
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                    >
                        {/* <!-- Category Block --> */}
                        <CompanyCategories />
                    </div>
                </div>
            </section>
            {/* End Job Categorie Section */}

      



      <section className="layout-pt-60 layout-pb-120">
        <div className="auto-container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="sec-title -type-2 text-center">
                <h2>Who first visit our page</h2>
                {/* <div className="text">
                  Fast M&A deal
                </div> */}
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row grid-base pricing3_hover" data-aos="fade-up">
            <RegBanner />
          </div>
          {/* End .row */}
        </div>
        </section>
        {/* <!-- End Pricing Section --> */}


        <section className="news-section style-three">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>M&A 성약 사례</h2>
            <div className="text">
              성약 사례 모음
            </div>
          </div>
          {/* End .sec-title */}

          <div className="row" data-aos="fade-up">
            <Blog />
          </div>
        </div>
      </section>
      {/* <!-- End News Section --> */}
      
      <section className="clients-section">
        <div className="sponsors-outer" data-aos="fade">
          {/* <!--Sponsors Carousel--> */}
          <ul className="sponsors-carousel">
            <Partner />
          </ul>
        </div>
      </section>
      {/* <!-- End Clients Section--> */}
      
      <Footer />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
