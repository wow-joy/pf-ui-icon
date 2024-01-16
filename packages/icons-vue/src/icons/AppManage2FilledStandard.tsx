// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AppManage2FilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/AppManage2FilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface AppManage2FilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const AppManage2FilledStandard: AppManage2FilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={AppManage2FilledStandardSvg}></PfIcon>;
};

AppManage2FilledStandard.displayName = 'AppManage2FilledStandard';
AppManage2FilledStandard.inheritAttrs = false;
export default AppManage2FilledStandard;