import * as React from 'react';
import * as L from './styles';

const Tag: React.FC<L.ITagProps> = ({ children, ...props }) => (
  <L.Tag {...props}>
    <div className="tag__circle" />
    <div className="tag__text">{children}</div>
  </L.Tag>
);

export default Tag;
