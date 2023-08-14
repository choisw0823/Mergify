import List from "./list";
import Breadcrumb from "../../common/Breadcrumb";
import LoginPopup from "../../common/form/login/LoginPopup";
import Footer from "../../home/Footer";
import Header from "../../home/Header";
import MobileMenu from "../../header/MobileMenu";
import BlogPagination from "./BlogPagination";

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

      <Breadcrumb title="Blog" meta="Blog" />
      {/* <!--End Page Title--> */}

      <div className="sidebar-page-container">
        <div className="auto-container">
          <div className="row">
            <div className="content-side col-lg-12 col-md-12 col-sm-12">
              <div className="blog-grid">
                <div className="row">
                  <List />
                </div>
                {/* End .row */}

                <BlogPagination />
                {/* End blog pagination */}
              </div>
              {/* End blog-grid */}
            </div>
          </div>
          {/* End .row */}
        </div>
      </div>
      {/* <!-- End Sidebar Container --> */}

      <Footer />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
