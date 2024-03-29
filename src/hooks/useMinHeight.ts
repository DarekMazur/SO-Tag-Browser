import { useEffect, useState } from 'react';

const getHeaderHeight = () => {
  const header = document.querySelector('header');
  if (header) {
    return header.offsetHeight;
  }

  return 0;
};

const getFooterHeight = () => {
  const footer = document.querySelector('footer');
  if (footer) {
    return footer.offsetHeight;
  }

  return 0;
};

// eslint-disable-next-line import/prefer-default-export
export const useMinHeight = () => {
  const [wrapperHeight, setWrapperHeight] = useState(0);
  useEffect(() => {
    setWrapperHeight(getHeaderHeight() + getFooterHeight());
  }, []);

  return window.innerHeight - wrapperHeight;
};
