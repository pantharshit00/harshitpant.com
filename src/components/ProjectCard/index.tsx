import * as React from 'react';
import Tag from '@components/Tag';
import CheckMarkSvg from '@components/Shared/CheckMarkSvg';
import GithubIcon from '@components/Shared/GithubIcon';
import LinkIcon from '@components/Shared/LinkIcon';
import * as L from './styles';

export interface ITag {
  color: string;
  text: string;
  textColor?: string;
}

export interface IProjectCardProps {
  name: string;
  logo?: React.ReactElement;
  tags: ITag[];
  githubLink?: string;
  websiteLink?: string;
  texts: string[];
}

const LiWithSvg: React.FC = ({ children }) => (
  <L.Li>
    <CheckMarkSvg />
    <span>{children}</span>
  </L.Li>
);

const ProfileCard: React.FC<IProjectCardProps> = ({
  logo,
  tags,
  githubLink,
  websiteLink,
  texts,
  name,
  ...others
}) => {
  return (
    <L.Card {...others}>
      <L.CardHeader>
        <L.Logo>{logo}</L.Logo>
        <L.Spacer />
        <L.Links>
          {githubLink ? (
            <a href={githubLink} rel="noopener noreferrer" target="_blank">
              <GithubIcon />
            </a>
          ) : (
            ''
          )}
          {websiteLink ? (
            <a href={websiteLink} rel="noopener noreferrer" target="_blank">
              <LinkIcon />
            </a>
          ) : (
            ''
          )}
        </L.Links>
      </L.CardHeader>
      <div>
        {tags.map(tag => (
          <Tag
            key={`${name}-${tag.text}`}
            color={tag.color}
            textColor={tag.textColor}
          >
            {tag.text}
          </Tag>
        ))}
      </div>
      <L.ListContainer>
        <L.List>
          {texts.map((text, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <LiWithSvg key={`${name}-text-${index}`}>{text}</LiWithSvg>
          ))}
        </L.List>
      </L.ListContainer>
    </L.Card>
  );
};

export default ProfileCard;
