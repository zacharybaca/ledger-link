import React from 'react';
import { Button } from 'reactstrap';
import './Button.module.css';

const ButtonComponent = ({ buttonText }) => {
  return <Button color="danger">{buttonText}</Button>;
};

export default ButtonComponent;
