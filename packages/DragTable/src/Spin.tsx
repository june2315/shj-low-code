import React, { useState, useEffect, useRef, useCallback } from 'react';

const Spin = (props: any) => {
  const { tip = '' } = props;
  return (
    <div
      className={`shj-spin shj-spin-spinning ${
        tip ? 'shj-spin-show-text' : ''
      }`}
    >
      <span className="shj-spin-dot shj-spin-dot-spin">
        <i className="shj-spin-dot-item"></i>
        <i className="shj-spin-dot-item"></i>
        <i className="shj-spin-dot-item"></i>
        <i className="shj-spin-dot-item"></i>
      </span>
      <div className="shj-spin-text">{tip}</div>
    </div>
  );
};

export default Spin;
