// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MenuFilledSvg from '@pf-ui/pf-icon-svg/es/asn/MenuFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface MenuFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const MenuFilled: MenuFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={MenuFilledSvg}></PfIcon>;
};

MenuFilled.displayName = 'MenuFilled';
MenuFilled.inheritAttrs = false;
export default MenuFilled;