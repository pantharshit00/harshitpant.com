import * as React from 'react';
import TwitterIcon from '@components/Shared/TwitterIcon';
import GithubSpectrumIcon from '@components/Shared/GithubSpectrumIcon';
import * as L from './style';

const Footer = () => {
  return (
    <>
      <L.Container as="footer">
        <L.Grid>
          <L.LogoSection>
            <h3>hP</h3>
            <div className="logosection__logos">
              <a
                href="https://github.com/pantharshit00"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubSpectrumIcon />
              </a>
              <a
                href="https://twitter.com/pantharshit00"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon />
              </a>
            </div>
          </L.LogoSection>
          <L.LinksSection>
            <div className="linksection__container">
              <h4>Navigation</h4>
              <ul>
                <li>Home</li>
                <li>Blog</li>
                <li>About</li>
              </ul>
            </div>
            <div className="linksection__container">
              <h4>Contact</h4>
              <ul>
                <li>Github</li>
                <li>Twitter</li>
                <li>Email</li>
              </ul>
            </div>
          </L.LinksSection>
        </L.Grid>
      </L.Container>
      <L.CreditsSection>
        <div className="credits__techs">
          <div>
            Illustrations by{' '}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://undraw.co"
            >
              Undraw.co
            </a>
          </div>
          <div>
            Powered by{' '}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://undraw.co"
            >
              Gatsby
            </a>
          </div>
          <div>
            Hosted on{' '}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://undraw.co"
            >
              Netlify
            </a>
          </div>
        </div>
        <div className="credits__cpright">
          © 2019 Harshit Pant&nbsp; • &nbsp;
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/pantharshit00/harshitpant.com"
          >
            Source
          </a>
        </div>
      </L.CreditsSection>
    </>
  );
};

export default Footer;
