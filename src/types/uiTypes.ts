export interface IconProps {
  className?: string;
  color?: string;
  height?: string | number;
  id?: string;
  lang?: string;
  max?: string | number;
  onClick?: () => void;
  role?: string;
  style?: React.CSSProperties;
  tabIndex?: number;
  title?: string;
  width?: string | number;
}

export interface SocialLinkProps {
  icon: (props: IconProps) => React.ReactElement;
  href?: string;
  className?: string;
}
