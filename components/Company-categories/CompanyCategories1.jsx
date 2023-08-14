import Link from "next/link";
import comapnycatcontent from "../../data/company-catergories";
/* Main page company categories */
const JobCategorie1 = () => {
  return (
    <>
      {comapnycatcontent.map((item) => (
        <div
          className="category-block col-lg-4 col-md-6 col-sm-12"
          key={item.id}
        >
          <div className="inner-box">
            <div className="content">
              <span className={`icon ${item.icon}`}></span>
              <h4>
                <Link href="/job-list-v1">{item.catTitle}</Link>
              </h4>
              <p>({item.jobNumber}개 기업)</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default JobCategorie1;
