import styled from 'styled-components';
import { ChangeEvent, useState } from "react";

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-size: small;
  `;

const Switch = styled.div`
position: relative;
width: 35px;
height: 10px;
background: #b3b3b3;
border-radius: 32px;
padding: 4px;
transition: 300ms all;

&:before {
  transition: 300ms all;
  content: "";
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 30px;
  top: 50%;
  background: white;
  transform: translate(0, -50%);
}
`
const Input = styled.input`
  display: none;

  &:checked + ${Switch} {
    background: #A0A083;

    &:before {
      transform: translate(20px, -50%);
    }
  }
`;

const ToggleSwitch = ({checked, setChecked}) => {

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <Label>
      <span>{checked ? "STARK MODE ON" : "STARK MODE OFF"}</span>
      <Input checked={checked} type="checkbox" onChange={handleChange} />
      <Switch />
  </Label>
  );
};

export default ToggleSwitch;