import * as React from 'react';
import TwitterIcon from '@components/Shared/TwitterIcon';
import GithubSpectrumIcon from '@components/Shared/GithubSpectrumIcon';
import { Link } from 'gatsby';
import * as L from './style';

const Footer: React.FC = () => {
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
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/blogs">Blog</Link>
                </li>
                <li>
                  <Link to="/#about">About</Link>
                </li>
              </ul>
            </div>
            <div className="linksection__container">
              <h4>Contact</h4>
              <ul>
                <li>
                  <a href="https://github.com/pantharshit00">Github</a>
                </li>
                <li>
                  <a href="https://twitter.com/pantharshit00">Twitter</a>
                </li>
                <li>
                  <a href="mailto:hi@harshitpant.com">Email</a>
                </li>
              </ul>
            </div>
          </L.LinksSection>
        </L.Grid>
      </L.Container>
      <L.CreditsSection>
        <div className="credits__grid">
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
                href="https://gatsbyjs.org"
              >
                Gatsby
              </a>
            </div>
            <div>
              Hosted on{' '}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://netlify.com"
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
        </div>
      </L.CreditsSection>
    </>
  );
};

export default Footer;
