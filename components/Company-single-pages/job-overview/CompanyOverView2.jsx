const JobOverView2 = () => {
  return (
    <ul>
      <li>
        <i className="icon icon-calendar"></i>
        <h5>게시 날짜:</h5>
        <span>Posted 1 hours ago</span>
      </li>
      {/* <li>
        <i className="icon icon-expiry"></i>
        <h5>Expiration date:</h5>
        <span>April 06, 2021</span>
      </li> */}
      <li>
        <i className="icon icon-location"></i>
        <h5>위치:</h5>
        <span>London, UK</span>
      </li>
      <li>
        <i className="icon icon-user-2"></i>
        <h5>회사명:</h5>
        <span>Designer</span>
      </li>
      <li>
        <i className="icon icon-clock"></i>
        <h5>설립년:</h5>
        <span>10년</span>
      </li>
      <li>
        <i className="icon icon-rate"></i>
        <h5>매출</h5>
        <span>50억원</span>
      </li>
      <li>
        <i className="icon icon-salary"></i>
        <h5>희망 매도가:</h5>
        <span>100억~200억</span>
      </li>
    </ul>
  );
};

export default JobOverView2;
