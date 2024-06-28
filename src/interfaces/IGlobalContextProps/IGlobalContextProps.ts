export interface IGlobalContext {
  issidebarvisible?: boolean;
  setIsSideBarVisible: React.Dispatch<React.SetStateAction<boolean>>;
  showSideBar: () => void;
  animationImage: boolean;
  setAnimationImage: React.Dispatch<React.SetStateAction<boolean>>;
  animationImageSlide: boolean;
  setAnimationImageSlide: React.Dispatch<React.SetStateAction<boolean>>;
  router: any;
  ismobile?: boolean;
  setCardHover: React.Dispatch<React.SetStateAction<boolean>>;
  cardHover: boolean;
  isTabletSmall: boolean;
  isTablet: boolean;
}
