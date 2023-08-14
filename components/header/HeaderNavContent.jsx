import Link from "next/link";
import {
  IntroItems,
  EnterItems,
  SearchItems,
  ContactItems
} from "../../data/mainMenuData";
import {
  isActiveParent,
  isActiveLink,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";
import { useRouter } from "next/router";

const HeaderNavContent = () => {
  const router = useRouter();

  return (
    <>
      <nav className="nav main-menu">
        <ul className="navigation" id="navbar">
          {/* current dropdown */}
          <li
            className={`${
              isActiveParentChaild(IntroItems, router.asPath) ? "current" : ""
            } dropdown`}
          >
            <span>소개</span>
            <ul>
              {IntroItems.map((item, i) => (
                <li
                  className={
                    isActiveLink(item.routePath, router.asPath) ? "current" : ""
                  }
                  key={i}
                >
                  <Link href={item.routePath}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </li>
          {/* End Introduction menu items */}


          <li
            className={`${
              isActiveParentChaild(EnterItems, router.asPath) ? "current" : ""
            } dropdown`}
          >
            <span>기업 등록</span>
            <ul>
              {EnterItems.map((item, i) => (
                <li
                  className={
                    isActiveLink(item.routePath, router.asPath) ? "current" : ""
                  }
                  key={i}
                >
                  <Link href={item.routePath}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </li>
          {/* End Entry menu items */}


          <li
            className={`${
              isActiveParentChaild(SearchItems, router.asPath) ? "current" : ""
            } dropdown`}
          >
            <span>기업 검색</span>
            <ul>
              {SearchItems.map((item, i) => (
                <li
                  className={
                    isActiveLink(item.routePath, router.asPath) ? "current" : ""
                  }
                  key={i}
                >
                  <Link href={item.routePath}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </li>
          {/* End search menu items */}
          <li
            className={`${
              isActiveParentChaild(ContactItems, router.asPath) ? "current" : ""
            } dropdown`}
          >
            <span>Contact</span>
            <ul>
              {ContactItems.map((item, i) => (
                <li
                  className={
                    isActiveLink(item.routePath, router.asPath) ? "current" : ""
                  }
                  key={i}
                >
                  <Link href={item.routePath}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </li>
          {/* End contact menu items */}

       
        </ul>
      </nav>
    </>
  );
};

export default HeaderNavContent;
