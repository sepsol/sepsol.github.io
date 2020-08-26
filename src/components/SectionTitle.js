import React, { useState } from 'react';
import { useMediaQuery } from 'beautiful-react-hooks';
import './SectionTitle.css';

function SectionTitle({ children }) {
  const largeScreen = useMediaQuery('(min-width: 720px)');
  const [hashtag, setHashtag] = useState(false);

  function titleToId() {
    return children.toLowerCase();
  }

  function showHashtag() {
    setHashtag(true);
  }
  function hideHashtag() {
    setHashtag(false);
  }

  return (
    <div
      className="section-title"
      onMouseOver={showHashtag}
      onMouseOut={hideHashtag}
    >
      {largeScreen ? (
        <a
          href={`#${titleToId()}`}
          className={`hashtag ${hashtag ? 'show-hashtag' : 'hide-hashtag'}`}
        >
          #{' ‌'}
        </a>
      ) : null}
      <h2 id={titleToId()}>{children}</h2>
    </div>
  );
}

export default SectionTitle;
