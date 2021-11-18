import { sizes } from './sizes';

export const devices = {
  mobileS: (mediaType = 'max') =>
    `screen and (${mediaType}-width:${sizes.mobileS})`,
  mobileM: (mediaType = 'max') =>
    `screen and (${mediaType}-width:${sizes.mobileM})`,
  mobileL: (mediaType = 'max') =>
    `screen and (${mediaType}-width:${sizes.mobileL})`,
  tabletS: (mediaType = 'max') =>
    `screen and (${mediaType}-width:${sizes.tabletS})`,
  tabletM: (mediaType = 'max') =>
    `screen and (${mediaType}-width:${sizes.tabletM})`,
  tabletL: (mediaType = 'max') =>
    `screen and (${mediaType}-width:${sizes.tabletL})`,
  laptop: (mediaType = 'max') =>
    `screen and (${mediaType}-width:${sizes.laptop})`,
  laptopM: (mediaType = 'max') =>
    `screen and (${mediaType}-width:${sizes.laptopM})`,
  laptopL: (mediaType = 'max') =>
    `screen and (${mediaType}-width:${sizes.laptopL})`,
};
