import React from 'react';

import {images} from '../../constants'
import {SubHeading} from '../../components'
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What we Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">I'm Luo, a professional chef in making your delicacy.</p>
        </div>
        <p className="p__opensans">Listing all menu and different cocktails all over the entire region. Giving you the best glitche of flavour from my kitchen. Dinning it with your most preferred ingredients to soothe your desiring and unleashing mood. With your taste,put your trust in me.</p>
      </div>
      <div className="app__chef-sign">
      <p>Kevin Luo</p>
      <p className="p__opensans">Chef & Founder</p>
      <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
