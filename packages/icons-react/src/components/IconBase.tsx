import * as React from 'react';
import { AbstractNode, IconDefinition } from '@pf-ui/pf-icon-svg/lib/types';
import {
  generate,
  isIconDefinition,
  warning,
  useInsertStyles,
} from '../utils';

export interface IconProps {
  icon: IconDefinition;
  className?: string;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  style?: React.CSSProperties;
  primaryColor?: string; // only for two-tone
  secondaryColor?: string; // only for two-tone
  focusable?: string;
}

export interface TwoToneColorPaletteSetter {
  primaryColor: string;
  secondaryColor?: string;
}

export interface TwoToneColorPalette extends TwoToneColorPaletteSetter {
  calculated?: boolean; // marker for calculation
}

const twoToneColorPalette: TwoToneColorPalette = {
  primaryColor: '#333',
  secondaryColor: '#E6E6E6',
  calculated: false,
};

function setTwoToneColors({
  primaryColor,
  secondaryColor,
}: TwoToneColorPaletteSetter) {
  twoToneColorPalette.primaryColor = primaryColor;
  twoToneColorPalette.secondaryColor = secondaryColor
  twoToneColorPalette.calculated = !!secondaryColor;
}

function getTwoToneColors(): TwoToneColorPalette {
  return {
    ...twoToneColorPalette,
  };
}

interface IconBaseComponent<P> extends React.FC<P> {
  getTwoToneColors: typeof getTwoToneColors;
  setTwoToneColors: typeof setTwoToneColors;
}

const IconBase: IconBaseComponent<IconProps> = props => {
  const {
    icon,
    className,
    onClick,
    style,
    primaryColor,
    secondaryColor,
    ...restProps
  } = props;

  let colors: TwoToneColorPalette = twoToneColorPalette;
  if (primaryColor) {
    colors = {
      primaryColor,
      secondaryColor: secondaryColor,
    };
  }

  useInsertStyles();

  warning(
    isIconDefinition(icon),
    `icon should be icon definiton, but got ${icon}`,
  );

  if (!isIconDefinition(icon)) {
    return null;
  }

  let target = icon;
  if (target && typeof target.icon === 'function') {
    target = {
      ...target,
      icon: target.icon(colors.primaryColor, colors.secondaryColor),
    };
  }
  return generate(target.icon as AbstractNode, `svg-${target.name}`, {
    className,
    onClick,
    style,
    'data-icon': target.name,
    width: '1em',
    height: '1em',
    fill: 'currentColor',
    'aria-hidden': 'true', // 根据辅助隐藏页面的icon内容
    ...restProps,
  });
};

IconBase.displayName = 'IconBase';
IconBase.getTwoToneColors = getTwoToneColors;
IconBase.setTwoToneColors = setTwoToneColors;

export default IconBase;
