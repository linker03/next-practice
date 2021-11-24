import styled from 'styled-components';
import Link from 'next/link';
import { Fragment } from 'react';

const tempCrumbs = [
  { id: '0', label: 'Home', href: '/', active: false },
  { id: '1', label: 'Page Name', href: '/', active: false },
  { id: '2', label: 'Page Name', href: '/', active: true },
];

const Breadcrumbs = () => {
  return (
    <Container>
      {tempCrumbs.map((crumb) => (
        <Fragment key={crumb.id}>
          <Link href={crumb.href} passHref>
            <Crumb active={crumb.active} disabled={crumb.active}>
              {crumb.label}
            </Crumb>
          </Link>
          {!crumb.active && '  >'}
        </Fragment>
      ))}
    </Container>
  );
};

const Container = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: var(--secondary-dark-gray);
`;

const Crumb = styled.a`
  ${({ active }) => !active && 'text-decoration: underline;'};
`;

export default Breadcrumbs;
