import Link from "next/link";

const Pricing3 = () => {
  const pricingCotent = [
    {
      id: 1,
      img: "images/index-13/pricing/1.svg",
      type: "",
      price: "인수자",
      duration: "",
      features: [
        "인수자"
      ],
    },
    {
      id: 2,
      img: "images/index-13/pricing/2.svg",
      type: "",
      price: "피인수자",
      duration: "",
      features: [
        "피인수자"
      ],
    },
    {
      id: 3,
      img: "images/index-13/pricing/3.svg",
      type: "",
      price: "전문가",
      duration: "",
      features: [
        "전문가"
      ],
    },
  ];

  return (
    <>
      {pricingCotent.map((item) => (
        <div className="col-lg-4 col-md-6" key={item.id}>
          <div className="pricingCard -type-2">
            <h4 className="pricingCard__title">{item.type}</h4>
            <div className="pricingCard__price">{item.price}</div>
            <div className="pricingCard__subtitle">{item.duration}</div>

            <div className="pricingCard__img">
              <img src={item.img} alt="images" />
            </div>

            {/* <div className="pricingCard__text text-left">
              Standard listing submission, active for 30 days
            </div> */}

            <ul className="pricingCard__list">
              {item.features.map((val, i) => (
                <li key={i}>{val}</li>
              ))}
            </ul>

            <div className="pricingCard__btn">
              <Link href="/shop/cart" className="theme-btn btn-style-modern">
                바로가기
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Pricing3;
