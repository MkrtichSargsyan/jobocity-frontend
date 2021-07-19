import React from 'react';

export const Backdrop = (props) => (
  <div
    className={'h-full w-full fixed z-10 left-0 top-0 bg-black opacity-80'}
    onClick={props.clicked}
  />
);
