import VueIcon from './IconBase';
import { IconBaseProps } from './Icon';
import { IconDefinition } from 'pf-icon-svg/lib/types';
import { getTwoToneColor, TwoToneColor, setTwoToneColor } from './twoTonePrimaryColor';
import { normalizeTwoToneColors } from '../utils';
import { FunctionalComponent, PropType } from 'vue';

export interface PfIconProps extends IconBaseProps {
  twoToneColor?: TwoToneColor;
}

export interface IconComponentProps extends PfIconProps {
  icon: IconDefinition;
}
interface Color {
  getTwoToneColor: () => TwoToneColor;
  setTwoToneColor: (twoToneColor: TwoToneColor) => void;
}

export interface PfIconType extends Color, FunctionalComponent<IconComponentProps> {
  displayName: string;
}

// Initial setting
setTwoToneColor('#1890ff');

const Icon: PfIconType = (props, context) => {
  const {
    class: cls,
    icon,
    spin,
    rotate,
    tabindex,
    // other
    twoToneColor,
    onClick,
    ...restProps
  } = { ...props, ...context.attrs } as any;
  const classObj = {
    anticon: true,
    [`anticon-${icon.name}`]: Boolean(icon.name),
    [cls]: cls,
  };

  const svgClassString = spin === '' || !!spin || icon.name === 'loading' ? 'anticon-spin' : '';

  let iconTabIndex = tabindex;
  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
    restProps.tabindex = iconTabIndex;
  }

  const svgStyle = rotate
    ? {
        msTransform: `rotate(${rotate}deg)`,
        transform: `rotate(${rotate}deg)`,
      }
    : undefined;
  const [primaryColor, secondaryColor] = normalizeTwoToneColors(twoToneColor);

  return (
    <span role="img" aria-label={icon.name} {...restProps} onClick={onClick} class={classObj}>
      <VueIcon
        class={svgClassString}
        icon={icon}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        style={svgStyle}
      />
    </span>
  );
};

Icon.props = {
  spin: Boolean as PropType<boolean>,
  rotate: Number as PropType<number>,
  icon: Object as PropType<IconDefinition>,
  twoToneColor: String as PropType<TwoToneColor>,
};
Icon.displayName = 'PfIcon';
Icon.inheritAttrs = false;
Icon.getTwoToneColor = getTwoToneColor;
Icon.setTwoToneColor = setTwoToneColor;

export default Icon;
