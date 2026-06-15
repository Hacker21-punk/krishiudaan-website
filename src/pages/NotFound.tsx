import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      {/* Breadcrumb */}
      <section 
        className="breadcrumb__area breadcrumb__pt-310 include-bg p-relative" 
        style={{ backgroundImage: 'url(/assets/img/breadcrum/ab-1.1.jpg)' }}
      >
        <div className="ac-about-shape-img z-index-1">
          <img src="/assets/img/breadcrum/ab-shape-1.1.jpg" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content p-relative z-index-1">
                <h3 className="breadcrumb__title">404 Page</h3>
                <Link className="tp-btn-white-border" to="/">
                  Back to home <i className="far fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 404 Graphic Area */}
      <div className="tp-404-area tp-404-circle sky-bg pt-200 pb-150 fix">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tp-404-thumb d-flex justify-content-center align-items-center z-index-1">
                <img src="/assets/img/contact/404.png" alt="Not Found" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
