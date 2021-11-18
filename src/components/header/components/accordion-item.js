import styled from 'styled-components';
import { ArrowRight } from 'src/components/icons';
import { useState } from 'react';

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Container>
      <Title onClick={toggleOpen}>
        <StyledIcon isOpen={isOpen} /> {title}
      </Title>
      <HiddenPart isOpen={isOpen}>{children}</HiddenPart>
    </Container>
  );
};

const Container = styled.li``;

const Title = styled.div`
  padding: 20px;

  display: flex;
  align-items: center;
  gap: 22px;

  font-size: 18px;
  cursor: pointer;
`;

const StyledIcon = styled(ArrowRight)`
  fill: var(--primary-pink);
  transform: ${({ isOpen }) => (isOpen ? 'rotate(90deg)' : 'rotate(0)')};

  transition: transform 0.3s ease-in-out;
`;

const HiddenPart = styled.ul`
  overflow: hidden;
  max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')};

  transition: all 0.6s ease-in-out;
`;

export default AccordionItem;
