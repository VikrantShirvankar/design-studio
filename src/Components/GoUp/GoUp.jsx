import React, { useEffect, useState } from 'react';
import './GoUp.scss';

const GoUp = () => {
  const [showBtn, setShowBtn] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', detectScroll);
    return () => {
      window.removeEventListener('scroll', detectScroll);
    };
  }, []);

  const detectScroll = () => {
    const showBtnAfterPerc = document.body.scrollHeight * 0.32;
    if (
      document.body.scrollTop > showBtnAfterPerc ||
      document.documentElement.scrollTop > showBtnAfterPerc
    ) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  };
  
  if (!showBtn) return <></>;
  return (
    <div
      className="goUpWrapper"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <i className="fas fa-level-up-alt" />
    </div>
  );
};

export default GoUp;
