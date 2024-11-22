import React from "react";
import closeIcon from "../../assets/icons/close.svg";
import backArrowIcon from "../../assets/icons/back-arrow.svg";
import forwardArrowIcon from "../../assets/icons/forward-arrow.svg";
import metaIcon from "../../assets/icons/meta-icon.svg";
import './ComponentHeader.scss';

export default function ComponentHeader({
  onClose,
  onBack,
  onNext,
  showBack,
  showNext,
  children,
}) {
  return (
    <div className="component-header">
      <div className="button-row">
        <div className="button-group-left">
          {showBack && onBack && (
            <button onClick={onBack} className="header-button back-button">
              <img src={backArrowIcon} alt="Back Icon" />
            </button>
          )}
          {showNext && onNext && (
            <button onClick={onNext} className="header-button next-button">
              <img src={forwardArrowIcon} alt="Forward Icon" />
            </button>
          )}
        </div>

        <div className="meta-icon-container">
          <img src={metaIcon} alt="Meta Icon" className="meta-icon" />
        </div>

        <button onClick={onClose} className="header-button close-button">
        <img src={closeIcon} alt="Close Icon" />
        </button>

      </div>

      <div className="header-content">{children}</div>
    </div>
  );
}

