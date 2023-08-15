import LoginPopup from "../../common/form/login/LoginPopup";
import Footer from "../../home/Footer";
import Header from "../../home/Header";
import MobileMenu from "../../header/MobileMenu";
import TermsText from "./TermsText";

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

      <section className="tnc-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Terms and Conditions</h2>
            <div className="text">Home / Terms and Conditions</div>
          </div>
          {/* End sec-title */}
          <TermsText />
        </div>
      </section>
      {/* <!-- End TNC Section --> */}

      <Footer/>
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
