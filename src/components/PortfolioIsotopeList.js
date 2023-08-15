import Isotope from 'isotope-layout';
import Link from 'next/link';
import { Fragment, useEffect, useRef, useState } from 'react';
const PortfolioIsotopeList = ({ noViewMore }) => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState('*');
  useEffect(() => {
    isotope.current = new Isotope('.works-items', {
      itemSelector: '.works-col',
      //    layoutMode: "fitRows",
      percentPosition: true,
      masonry: {
        columnWidth: '.works-col',
      },
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false,
      },
    });
    return () => isotope.current.destroy();
  });
  useEffect(() => {
    if (isotope.current) {
      filterKey === '*' ? isotope.current.arrange({ filter: `*` }) : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? 'active' : '');
  return (
    <Fragment>
      <div className="works-box works-list">
        <div className="filter-links scrolla-element-anim-1 scroll-animate" data-animate="active">
          <a className={`c-pointer lui-subtitle ${activeBtn('*')}`} onClick={handleFilterKeyChange('*')} data-href=".works-col">
            All
          </a>
          <a className={`c-pointer lui-subtitle ${activeBtn('sorting-frondend')}`} onClick={handleFilterKeyChange('sorting-frondend')} data-href=".sorting-frondend">
            FrontEnd
          </a>
          <a className={`c-pointer lui-subtitle ${activeBtn('sorting-backend')}`} onClick={handleFilterKeyChange('sorting-backend')} data-href=".sorting-backend">
            Backend
          </a>
          <a className={`c-pointer lui-subtitle ${activeBtn('sorting-other')}`} onClick={handleFilterKeyChange('sorting-other')} data-href=".sorting-other">
            Other
          </a>
        </div>
        <div className="works-items works-list-items row">
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-other sorting-backend ">
            <div className="works-item scrolla-element-anim-1 scroll-animate" data-animate="active">
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/work-single">
                    <a>
                      <img decoding="async" src="assets/images/work4.jpeg" alt="Zorro" />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Other, Backend </span>
                <h5 className="name">
                  <Link legacyBehavior href="/work-single">
                    <a>Zorro</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
                <Link legacyBehavior href="/work-single">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: 'url(assets/images/pat-2.png)',
                }}
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-other sorting-frondend ">
            <div className="works-item scrolla-element-anim-1 scroll-animate" data-animate="active">
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/work-single">
                    <a>
                      <img decoding="async" src="assets/images/work2.jpeg" alt="Gooir" />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Other, FrontEnd </span>
                <h5 className="name">
                  <Link legacyBehavior href="/work-single">
                    <a>Gooir</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
                <Link legacyBehavior href="/work-single">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: 'url(assets/images/pat-2.png)',
                }}
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-other sorting-frondend ">
            <div className="works-item scrolla-element-anim-1 scroll-animate" data-animate="active">
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/work-single">
                    <a>
                      <img decoding="async" src="assets/images/work7.jpg" alt="Explore" />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> other, FrontEnd </span>
                <h5 className="name">
                  <Link legacyBehavior href="/work-single">
                    <a>Explore</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
                <Link legacyBehavior href="/work-single">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: 'url(assets/images/pat-2.png)',
                }}
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-other sorting-backend ">
            <div className="works-item scrolla-element-anim-1 scroll-animate" data-animate="active">
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/work-single">
                    <a>
                      <img decoding="async" src="assets/images/work1.jpeg" alt="Mozar" />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Other, Backend </span>
                <h5 className="name">
                  <Link legacyBehavior href="/work-single">
                    <a>Mozar</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
                <Link legacyBehavior href="/work-single">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: 'url(assets/images/pat-2.png)',
                }}
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-other sorting-frondend ">
            <div className="works-item scrolla-element-anim-1 scroll-animate" data-animate="active">
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/work-single">
                    <a>
                      <img decoding="async" src="assets/images/single8.jpg" alt="Stay Fit" />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> other, FrontEnd </span>
                <h5 className="name">
                  <Link legacyBehavior href="/work-single">
                    <a>Stay Fit</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
                <Link legacyBehavior href="/work-single">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: 'url(assets/images/pat-2.png)',
                }}
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-other sorting-backend ">
            <div className="works-item scrolla-element-anim-1 scroll-animate" data-animate="active">
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/work-single">
                    <a>
                      <img decoding="async" src="assets/images/single6.jpg" alt="Kana" />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> other, Backend </span>
                <h5 className="name">
                  <Link legacyBehavior href="/work-single">
                    <a>Kana</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
                <Link legacyBehavior href="/work-single">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: 'url(assets/images/pat-2.png)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default PortfolioIsotopeList;
