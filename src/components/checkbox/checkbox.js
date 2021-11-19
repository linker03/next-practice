import styled from 'styled-components';
import { useState } from 'react';
import { CheckIcon } from '../icons';

const Checkbox = ({
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
    <Container className={className} isDisabled={isDisabled}>
      {label}
      <HiddenInput
        className="visually-hidden"
        checked={checked}
        onChange={onChangeHandler}
        disabled={isDisabled}
        name={name}
      />
      <StyledCheckBox checked={checked}>
        <CheckIcon />
      </StyledCheckBox>
    </Container>
  );
};

const Container = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  cursor: ${({ isDisabled }) => (isDisabled ? 'default' : 'pointer')};
`;

const HiddenInput = styled.input.attrs({ type: 'checkbox' })``;

const StyledCheckBox = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.3s ease-in-out;
  background-color: ${({ checked }) =>
    checked ? 'var(--primary-pink)' : 'var(--primary-white)'};
`;

export default Checkbox;
