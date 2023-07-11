import { ComponentType, ReactNode } from 'react';
import { SvgIconProps } from '@mui/material';

interface LinkIconProps {
  iconProps?: SvgIconProps;
  icon: string | ReactNode | ComponentType;
}

const LinkIcon = (props: LinkIconProps) => {
  const { icon, iconProps } = props;
  const IconTag = icon;

  // @ts-ignore
  return <IconTag {...iconProps} />;
};

export default LinkIcon;
