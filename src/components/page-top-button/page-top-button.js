import { usePageTop } from 'src/hooks';
import styled from 'styled-components';
import { ArrowRight } from '../icons';

const PageTopButton = () => {
  const visible = usePageTop();

  const clickHandler = () => {
    if (typeof window !== undefined) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };
  return visible ? (
    <Button onClick={clickHandler}>
      <StyledArrow />
      PAGE TOP
    </Button>
  ) : null;
};

const Button = styled.button`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  min-height: 80px;
  min-width: 80px;

  background-color: var(--secondary-light-pink);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: var(--primary-dark-gray);
  font-size: 12px;

  position: fixed;
  right: 30px;
  bottom: 30px;
`;

const StyledArrow = styled(ArrowRight)`
  transform: rotate(-90deg);
  fill: var(--primary-pink);
  margin-bottom: 5px;
`;

export default PageTopButton;
