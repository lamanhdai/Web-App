import React from 'react'

const FooterTop = () => {
  return(
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-7">
            <div className="block-subscribe">
              <div className="newsletter">
                <form>
                  <h4>newsletter</h4>
                  <input type="text" placeholder="Enter your email address" className="input-text required-entry validate-email" title="Sign up for our newsletter" id="newsletter1" name="email"/>
                  <button className="subscribe" title="Subscribe" type="submit"><span>Subscribe</span></button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-5">
            <div className="social">
              <ul>
                <li className="fb"><a href="#"></a></li>
                <li className="tw"><a href="#"></a></li>
                <li className="googleplus"><a href="#"></a></li>
                <li className="rss"><a href="#"></a></li>
                <li className="pintrest"><a href="#"></a></li>
                <li className="linkedin"><a href="#"></a></li>
                <li className="youtube"><a href="#"></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterTop