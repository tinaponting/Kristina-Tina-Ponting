import React from 'react';
import YoutubeIcon from '../assets/youtube.svg';
import TwitterIcon from '../assets/twitter.svg';
import GithubIcon from '../assets/github.svg';
import LinkedinIcon from '../assets/linkedin.svg';
import FacebookIcon from '../assets/facebook.svg';
import InstagramIcon from '../assets/instagram.svg';
import BehanceIcon from '../assets/behance.svg';
import DribbbleIcon from '../assets/dribbble.svg';
import AngelIcon from '../assets/angellist.svg';

const SocialIcon = ({ type }) => {
  switch (type) {
    case 'linkedin':
      return <LinkedinIcon className="footer-social-icon" />;
    case 'twitter':
      return <TwitterIcon className="footer-social-icon" />;
    case 'facebook':
      return <FacebookIcon className="footer-social-icon" />;
    case 'youtube':
      return <YoutubeIcon className="footer-social-icon" />;
    case 'instagram':
      return <InstagramIcon className="footer-social-icon" />;
    case 'github':
      return <GithubIcon className="footer-social-icon" />;
    case 'behance':
      return <BehanceIcon className="footer-social-icon" />;
    case 'dribbble':
      return <DribbbleIcon className="footer-social-icon" />;
    case 'angellist':
      return <AngelIcon className="footer-social-icon" />;
    default:
      return null;
  }
};

export default SocialIcon;
