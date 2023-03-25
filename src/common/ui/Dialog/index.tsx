import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#__next');

type Props = {
  children: React.ReactNode;
} & Modal.Props;

export const Dialog: React.FC<Props> = ({ children, ...props }) => {
  return <Modal {...props}>{children}</Modal>;
};
