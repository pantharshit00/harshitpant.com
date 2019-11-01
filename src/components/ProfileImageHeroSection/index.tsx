import * as React from 'react';
import ProfilePic from '@components/Images/ProfilePic';
import { useSlideLeft, useSlideTop } from '@hooks/animations';
import * as L from './styles';
// import Bezier from './bezier';

const ProfileImageHeroSection: React.FC = () => {
  const slideLeft = useSlideLeft();
  const slideTop = useSlideTop();
  return (
    <>
      <L.Section>
        <L.ImageSection>
          <ProfilePic />
          <L.DSvg />
        </L.ImageSection>
        <L.TextSection>
          <div>
            <L.YellowH6 style={slideTop}>Hi, I{"'"}m</L.YellowH6>
          </div>
          <div>
            <L.HeroH1 style={slideLeft}>Harshit Pant.</L.HeroH1>
          </div>
          <div>
            <L.HeroText>
              I am a software engineer from the Himalayas.
            </L.HeroText>
          </div>
          <div>
            <L.Button as="a" href="#contact">
              Say Hi!{' '}
              <span role="img" aria-label="wave">
                👋
              </span>
            </L.Button>
          </div>
        </L.TextSection>
      </L.Section>
      <L.Bezier />
    </>
  );
};

export default ProfileImageHeroSection;
