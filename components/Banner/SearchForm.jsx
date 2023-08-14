import Router from "next/router";

const SearchForm3 = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onClick={handleSubmit}>
      <div className="row">
        {/* <!-- Form Group --> */}
        <div className="form-group col-lg-4 col-md-12 col-sm-12">
          <span className="icon flaticon-search-1"></span>
          <input
            type="text"
            name="field_name"
            placeholder="Company, or Business"
          />
        </div>

        {/* <!-- Form Group --> */}
        <div className="form-group col-lg-3 col-md-12 col-sm-12 location">
          <span className="icon flaticon-map-locator"></span>
          <input type="text" name="field_name" placeholder="City or postcode" />
        </div>

        {/* <!-- Form Group --> */}
        <div className="form-group col-lg-3 col-md-12 col-sm-12 category">
          <span className="icon flaticon-briefcase"></span>
          <select className="chosen-single form-select">
            <option defaultValue="">모든 업종</option>
            <option defaultValue="44">음식점, 식품</option>
            <option defaultValue="106">의료</option>
            <option defaultValue="46">조제 약국, 화학, 의약품</option>
            <option defaultValue="48">소매업</option>
            <option defaultValue="47">IT</option>
            <option defaultValue="45">미용</option>
            <option defaultValue="105">의류, 패션</option>
            <option value="107">교육</option>
          </select>
        </div>

        {/* <!-- Form Group --> */}
        <div className="form-group col-lg-2 col-md-12 col-sm-12 text-right">
          <button
            type="submit"
            className="theme-btn btn-style-one"
            onClick={() => Router.push("/job-list-v3")}
          >
            기업 검색
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm3;
