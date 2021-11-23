import styled from 'styled-components';
import Image from 'next/image';
import { ExternalLinkIcon, MarkerIcon } from '../icons';

const Card = ({
  article,
  image,
  title,
  text,
  location,
  date,
  isExternalLink = false,
}) => {
  return (
    <CardContainer>
      {article && <ArticleMark>Article</ArticleMark>}
      <ImageContainer>
        <Image
          src={image}
          alt="card image"
          width={253}
          height={160}
          objectFit="contain"
          layout="responsive"
        />
      </ImageContainer>
      {!!date && <CardText>{date}</CardText>}
      {!!title && !isExternalLink && <CardTitle>{title}</CardTitle>}
      {!!title && isExternalLink && (
        <CardTitle>
          {title} <StyledExternalLinkIcon />
        </CardTitle>
      )}
      {!!text && <CardText>{text}</CardText>}
      {!!location && (
        <LocationMark>
          <StyledIcon />
          {location}
        </LocationMark>
      )}
    </CardContainer>
  );
};

const CardContainer = styled.div`
  position: relative;
  color: var(--primary-dark-gray);

  :hover {
    color: var(--primary-pink);

    img {
      transform: scale(1.1);
    }
  }
`;

const ImageContainer = styled.div`
  margin-bottom: 12px;
  position: relative;
  overflow: hidden;

  img {
    transition: transform 1s ease-out;
  }
`;
const CardTitle = styled.h4`
  color: inherit;
  font-weight: 700;
  transition: color 0.3s ease-out;
`;

const CardText = styled.p`
  color: inherit;
  margin-bottom: 10px;
  transition: color 0.3s ease-out;
`;

const LocationMark = styled.div`
  display: flex;
  gap: 8px;
  color: inherit;
  transition: color 0.3s ease-out;
`;

const StyledIcon = styled(MarkerIcon)`
  fill: var(--primary-dark-green);
`;

const ArticleMark = styled.p`
  display: block;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  font-size: 14px;
  line-height: 30px;

  padding: 0 15px;
  background-color: rgba(47, 93, 80, 0.8);
  color: var(--primary-white);
`;

const StyledExternalLinkIcon = styled(ExternalLinkIcon)`
  fill: var(--primary-pink);
  display: inline-block;
`;
export default Card;
