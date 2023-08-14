import Link from "next/link";

const LoginRegBanner = () => {
  return (
    <section
      className="cta -type-2"
      // style={{ backgroundImage: "url(images/icons/bg-1.png)" }}
    >
      <div className="auto-container">
        <div className="row grid-base justify-content-between">
          <div className="col-lg-5 col-md-6">
          <Link href="/shop/cart" >
            <div className="cta-item">
              <div className="icon-wrap">
                <div className="icon icon-case"></div>
              </div>
              {/* End icon-wrap */}

              <div className="content">
                <div className="title">피인수자</div>
                <div className="text">
                 피인수자 기업 판매
                </div>
              </div>

              {/* End content */}
            </div>
            </Link>
          </div>
          {/* End .col */}

          <div className="col-lg-5 col-md-6">
          <Link href="/shop/cart" >
            <div className="cta-item -blue">
              <div className="content">
                <div className="title">인수자 </div>
                <div className="text">
                  인수자 기업 구매
                </div>
              </div>

              {/* End .content */}

              <div className="icon-wrap">
                <div className="icon icon-contact"></div>
              </div>
            </div>
            </Link>
          </div>
          {/* End .col */}
        </div>
      </div>
    </section>
  );
};

export default LoginRegBanner;
