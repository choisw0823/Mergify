const Block1 = () => {
  const blockContent = [
    {
      id: 1,
      icon: "images/resource/work-1.png",
      title: "인수 희망 기업 등록",
      text: `인수 혹은 피인수를 희망하는 기업이 등록합니다.`,
    },
    {
      id: 2,
      icon: "images/resource/work-2.png",
      title: "AI Recommender system",
      text: `당사의 M&A 추천 시스템을 통해 최적의 M&A 딜을 생성합니다.`,
    },
    {
      id: 3,
      icon: "images/resource/work-3.png",
      title: "M&A 진행",
      text: `당사의 M&A 전문가와 함께 M&A를 진행합니다.`,
    },
  ];
  return (
    <>
      {blockContent.map((item) => (
        <div className="work-block col-lg-4 col-md-6 col-sm-12" key={item.id}>
          <div className="inner-box">
            <figure className="image">
              <img src={item.icon} alt="how it works" />
            </figure>
            <h5>{item.title}</h5>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Block1;
