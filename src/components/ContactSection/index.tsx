import * as React from 'react';
import * as G from '@components/Shared';
import SvgBezier from '@components/SvgBezier';
import TwitterIcon from '@components/Shared/TwitterIcon';
import EmailForm from './EmailForm';
import ContactSvg from './contactSvg';
import * as L from './styles';

const ContactSection: React.FC = () => {
  return (
    <L.Container>
      <G.CenteredHeader>
        <h1>
          Say Hi{' '}
          <span role="img" aria-label="hand wave">
            👋
          </span>
        </h1>
      </G.CenteredHeader>
      <L.Grid>
        <L.ContactFormSection>
          <h3 className="contact__form--heading">
            Toss me an email{' '}
            <span role="img" aria-label="envelope">
              ✉️
            </span>
          </h3>
          <EmailForm />
          <L.TwitterDMSection>
            <span>
              Or, you can DM me on{' '}
              <a
                href="https://twitter.com/pantharshit00"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </span>
            <TwitterIcon />
          </L.TwitterDMSection>
        </L.ContactFormSection>
        <G.SVGSectionWrapper>
          <ContactSvg />
        </G.SVGSectionWrapper>
      </L.Grid>
      <SvgBezier svgType={3} />
    </L.Container>
  );
};

export default ContactSection;
