// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MenuManageFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/MenuManageFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface MenuManageFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const MenuManageFilledStandard: MenuManageFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={MenuManageFilledStandardSvg}></PfIcon>;
};

MenuManageFilledStandard.displayName = 'MenuManageFilledStandard';
MenuManageFilledStandard.inheritAttrs = false;
export default MenuManageFilledStandard;