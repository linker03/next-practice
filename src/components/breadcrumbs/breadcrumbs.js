import styled from 'styled-components';
import Link from 'next/link';

const tempCrumbs = [
  { id: '0', label: 'Home', href: '/', active: false },
  { id: '1', label: 'Page Name', href: '/', active: false },
  { id: '2', label: 'Page Name', href: '/', active: true },
];

const Breadcrumbs = () => {
  return (
    <Container>
      {tempCrumbs.map((crumb) => (
        <>
          <Link href={crumb.href} passHref key={crumb.id}>
            <Crumb active={crumb.active} disabled={crumb.active}>
              {crumb.label}
            </Crumb>
          </Link>
          {!crumb.active && '  >'}
        </>
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
