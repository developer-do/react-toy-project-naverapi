import React from "react";
import styled from "styled-components";

const Label = styled.label`
  text-align: center;
  display: block;
  margin: 0 auto;
  padding: 5px;
  width: 80%;

  p {
    font-size: 1.1em;
    font-weight: 500;
    color: #2c3e50;
    display: block;
    text-align: left;
    width: 70%;
    margin: 0 auto 8px;
  }

  input {
    width: 70%;
    border-radius: 20px;
    padding: 8px 12px;
    transition: all 0.3s;
    border: 2px solid #bdc3c7;
  }
  input:focus {
    border-color: #1abc9c;
    background-color: transparent;
  }
`;

const Button = (props) => {
  const { cls, onChange, onKeyPress, label } = props;
  return (
    <Label htmlFor={cls}>
      <p>{label}</p>
      <input
        className={cls}
        name={cls}
        id={cls}
        onChange={onChange}
        onKeyPress={onKeyPress}
        required
        placeholder={cls}
      />
    </Label>
  );
};

export default Button;
