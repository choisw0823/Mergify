import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import CompanyList from "../components/Company-pages";

const index = () => {
  return (
    <>
      <Seo pageTitle="인수 기업 검색" />
      <CompanyList />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
