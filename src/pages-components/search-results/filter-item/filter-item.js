import { DropdownArrow } from 'src/components/icons';
import styled, { css } from 'styled-components';
import { useState, useRef, useEffect } from 'react';
import { useOnClickOutside } from 'src/hooks';
import { devices } from 'src/styles/devices';

const FilterItem = ({
  children,
  title,
  className,
  menuCSS,
  cutRight = false,
  cutLeft = false,
  withStripes = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const menuContainerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      console.log(menuContainerRef.current.getBoundingClientRect());
    }
  }, [isOpen]);

  const toggleOpen = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useOnClickOutside(containerRef, closeMenu);
  return (
    <Container ref={containerRef} className={className}>
      <FilterButton
        onClick={toggleOpen}
        cutRight={cutRight}
        cutLeft={cutLeft}
        withStripes={withStripes}
      >
        {title}
        <StyledIcon />
      </FilterButton>
      <FiltersContainer ref={menuContainerRef} $CSS={menuCSS} isOpen={isOpen}>
        {children}
      </FiltersContainer>
    </Container>
  );
};

const withStripesCSS = css`
  :after {
    content: '';
    position: absolute;
    top: 12px;
    right: 0;

    height: 20px;
    border-left: 1px solid var(--primary-white);
  }

  :before {
    content: '';
    position: absolute;
    top: 12px;
    left: 0;

    height: 20px;
    border-right: 1px solid var(--primary-white);
  }
`;

const cutRightCSS = css`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const cutLeftCSS = css`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

const Container = styled.div`
  position: relative;
`;

const FilterButton = styled.button`
  position: relative;
  background-color: var(--secondary-light-gray);
  color: var(--primary-dark-gray);

  border-radius: 30px;

  font-size: 14px;
  line-height: 30px;

  padding: 7px 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  svg {
    stroke: var(--primary-pink);
  }

  @media ${devices.tabletS('min')} {
    ${({ cutLeft }) => cutLeft && cutLeftCSS};
    ${({ cutRight }) => cutRight && cutRightCSS};
    ${({ withStripes }) => withStripes && withStripesCSS}
  }
`;

const StyledIcon = styled(DropdownArrow)`
  margin-left: 10px;
`;

const FiltersContainer = styled.ul`
  background-color: var(--secondary-lighter-pink);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  padding: 20px;

  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  overflow: hidden;

  position: absolute;
  top: 80%;
  z-index: 10;

  transition: all 0.3s ease-in-out;

  ${({ isOpen }) =>
    isOpen
      ? css`
          visibility: visible;
          opacity: 1;
          transform: translateY(0);
        `
      : css`
          visibility: hidden;
          opacity: 0;
          transform: translateY(-10px);
        `}

  ${({ $CSS }) => $CSS};
`;

export default FilterItem;
