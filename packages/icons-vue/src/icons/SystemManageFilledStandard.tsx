// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SystemManageFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/SystemManageFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface SystemManageFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const SystemManageFilledStandard: SystemManageFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={SystemManageFilledStandardSvg}></PfIcon>;
};

SystemManageFilledStandard.displayName = 'SystemManageFilledStandard';
SystemManageFilledStandard.inheritAttrs = false;
export default SystemManageFilledStandard;