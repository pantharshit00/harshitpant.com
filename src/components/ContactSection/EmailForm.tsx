import * as React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import media from '@utils/media';
// import { copyToClipboard } from 'copy-lite';

const ClipboardSVG: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-clipboard"
    {...props}
  >
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
  </svg>
);

const EmailFormContainer = styled.div`
  display: flex;
  max-width: ${rem('330px')};
  background: ${p => p.theme.colors.gray[200]};
  padding: 0.75rem 1rem 0.5rem 2rem;
  border-radius: ${rem('9px')};
  .spacer {
    flex: 1;
    ${media.desktop`
   margin: 0 1rem;
  `}
  }
  h4 {
    font-weight: 400;
    margin: 0;
    color: ${p => p.theme.colors.gray[700]};
    font-size: ${rem('20px')};
  }
  svg {
    stroke: ${p => p.theme.colors.gray[600]};
  }
`;

const EmailForm = () => {
  return (
    <EmailFormContainer>
      <h4>hi@harshitpant.com</h4>
      <div className="spacer" />
      <div>
        <ClipboardSVG />
      </div>
    </EmailFormContainer>
  );
};

export default EmailForm;
