import Footer from "../home/Footer";
import LoginPopup from "../common/form/login/LoginPopup";
import Header from "../home/Header";
import MobileMenu from "../header/MobileMenu";
import FilterJobBox from "./FilterCompanyBox";
import JobSearchForm from "./CompanySearchForm";
import ShopItems from "./components/ShopItems";
import Pagination from "./components/Pagination";

const index = () => {
  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      <LoginPopup />
      {/* End Login Popup Modal */}

      <Header />
      {/* End Header with upload cv btn */}

      <MobileMenu />
      {/* End MobileMenu */}

      <section className="page-title style-two">
        <div className="auto-container">
          <JobSearchForm />
          {/* <!-- Job Search Form --> */}
        </div>
      </section>
      {/* <!--End Page Title--> */}

     
      <div className="products-section">
        <div className="auto-container">
          <div className="row">
            <ShopItems />
          </div>
          {/* End .row */}

          <Pagination />
          {/* End .pagination */}
        </div>
        {/* End auto-container */}
      </div>
      {/* <!-- End Product Section --> */}


      <Footer />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
