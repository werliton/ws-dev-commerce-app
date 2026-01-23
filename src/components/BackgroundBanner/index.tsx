import HeroBanner, { type HeroBannerProps } from "../HeroBanner";

// Usando o principio OPEN/CLOSED para extender o componente HeroBanner
export const BackgroundBanner = ({ backgroundImage }: HeroBannerProps) => {
  return <HeroBanner backgroundImage={backgroundImage} />;
};
