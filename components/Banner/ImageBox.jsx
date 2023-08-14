const ImageBox = () => {
  return (
    <div className="image-box">
      <figure className="main-image" data-aos="fade-in" data-aos-delay="500">
        <img src="/images/background/ban5.jpg" alt="hero image" />{" "}
      </figure>
      {/* hero image */}
      {/* <!-- Info BLock One --> */}
      <div className="info_block" data-aos="fade-in" data-aos-delay="1000">
        <span className="icon flaticon-email-3"></span>
        <p>
          M&A based on <br />
          AI Algorithm
        </p>
      </div>
      {/* <!-- Info BLock Two --> */}
      <div className="info_block_two" data-aos="fade-in" data-aos-delay="2000">
        <p>10k+ Candidates</p>
        <div className="image">
          <img src="images/resource/multi-peoples.png" alt="mulit people" />
        </div>
      </div>
      {/* <!-- Info BLock Three --> */}
      <div
        className="info_block_three"
        data-aos="fade-in"
        data-aos-delay="1500"
      >
        <span className="icon flaticon-briefcase"></span>
        <p>M&A Service</p>
        <span className="sub-text">Startup</span>
        <span className="right_icon fa fa-check"></span>
      </div>
      {/* <!-- Info BLock Four --> */}
      <div className="info_block_four" data-aos="fade-in" data-aos-delay="2500">
        <span className="icon flaticon-file"></span>
        <div className="inner">
          <p>Sell your company</p>
          <span className="sub-text">It only takes a few month</span>
        </div>
      </div>{" "}
    </div>
  );
};

export default ImageBox;
