import Breadcrumb from "../../common/Breadcrumb";
import LoginPopup from "../../common/form/login/LoginPopup";
import Footer from "../../home/Footer";
import Header from "../../home/Header";
import MobileMenu from "../../header/MobileMenu";
import FaqChild from "./FaqChild";

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

      <Breadcrumb title="Faq's" meta="Faq's" />
      {/* <!--End Page Title--> */}

      <section className="faqs-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Frequently Asked Questions</h2>
            <div className="text">Home / Faq</div>
          </div>

          <h3>Payments</h3>
          {/* <!--Accordian Box--> */}
          <ul className="accordion-box">
            <FaqChild />
          </ul>

          <h3>Suggestions</h3>
          {/* <!--Accordian Box--> */}
          <ul className="accordion-box mb-0">
            <FaqChild />
          </ul>
        </div>
      </section>
      {/* <!-- End Faqs Section --> */}

      <Footer/>
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
