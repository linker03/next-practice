import styled from 'styled-components';
import { useState } from 'react';

const CheckboxButton = ({
  label,
  defaultValue = false,
  name,
  className,
  isDisabled,
  onChange,
}) => {
  const [checked, setChecked] = useState(defaultValue);

  const onChangeHandler = (event) => {
    const target = event?.target;
    setChecked(target?.checked);
    onChange && onChange(target);
  };
  return (
    <Container className={className} isDisabled={isDisabled} checked={checked}>
      {label}
      <HiddenInput
        className="visually-hidden"
        checked={checked}
        onChange={onChangeHandler}
        disabled={isDisabled}
        name={name}
      />
    </Container>
  );
};

const Container = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;

  padding: 0 15px;

  font-size: 12px;
  line-height: 30px;
  border: 1px solid var(--secondary-light-pink);
  border-radius: 30px;
  background-color: ${({ checked }) =>
    checked ? 'var(--secondary-light-pink)' : 'var(--primary-white)'};
  cursor: ${({ isDisabled }) => (isDisabled ? 'default' : 'pointer')};

  transition: background-color 0.3s ease-in-out;
`;

const HiddenInput = styled.input.attrs({ type: 'checkbox' })``;

export default CheckboxButton;
