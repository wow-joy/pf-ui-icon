// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AppManageFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/AppManageFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface AppManageFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const AppManageFilledStandard: AppManageFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={AppManageFilledStandardSvg}></PfIcon>;
};

AppManageFilledStandard.displayName = 'AppManageFilledStandard';
AppManageFilledStandard.inheritAttrs = false;
export default AppManageFilledStandard;