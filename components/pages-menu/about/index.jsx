import LoginPopup from "../../common/form/login/LoginPopup";
import Partner from "../../Partner/Partner";
import Footer from "../../home/Footer";
import Header from "../../home/Header";
import MobileMenu from "../../header/MobileMenu";
import Funfact from "../../fun-fact-counter/Funfact";
import ImgBox from "./ImgBox";
import IntroDescriptions from "./IntroDescriptions";
// import CallToAction2 from "../../call-to-action/CallToAction2";
import Block1 from "../../block/Block1";
import Breadcrumb from "../../common/Breadcrumb";

const index = () => {
  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      <LoginPopup />
      {/* End Login Popup Modal */}

      <Header />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      <Breadcrumb title="About Us" meta="About Us" />
      {/* <!--End Page Title--> */}

      <section className="about-section-three">
        <div className="auto-container">
          <ImgBox />

          {/* <!-- Fun Fact Section --> */}
          <div className="fun-fact-section">
            <div className="row">
              <Funfact />
            </div>
          </div>
          {/* <!-- Fun Fact Section --> */}

          <IntroDescriptions />
        </div>
      </section>
      {/* <!-- End About Section Three --> */}



      <section className="work-section style-two">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>How It Works?</h2>
            <div className="text">Job for anyone, anywhere</div>
          </div>
          {/* End sec-title */}

          <div className="row" data-aos="fade-up">
            <Block1 />
          </div>
        </div>
      </section>
      {/* <!-- End Work Section --> */}

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
