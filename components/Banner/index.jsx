import SearchForm from "./SearchForm";
import ImageBox from "./ImageBox";
// import PopularSearch from "../PopularSearch";
import RegBanner from "../Block/LoginRegBanner";
const index = () => {
  return (
    <section className="banner-section">
      <div className="auto-container">
        <div className="row">
          <div className="content-column col-lg-7 col-md-12 col-sm-12">
            <div
              className="inner-column"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="title-box">
                <h3>
                  AI 기반 중소기업 <span className="colored">M&A</span> 
                  <br /> 
                </h3>
                <div className="text">
                  Find Companies, Sell companies
                </div>
              </div>

              {/* <!-- Job Search Form --> */}
              <div className="job-search-form">
                <SearchForm />
              </div>
              {/* <!-- Job Search Form --> */}

              {/* <!-- Popular Search --> */}
              {/* <PopularSearch /> */}
              {/* <!-- End Popular Search --> */}
            </div>
          </div>
          {/* End .col */}

          <div className="image-column col-lg-5 col-md-12">
            <ImageBox />
          </div>

        </div>
      </div>
    </section>
  );
};

export default index;
