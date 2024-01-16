// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StopOutlinedStandardSvg from '@pf-ui/pf-icon-svg/es/asn/StopOutlinedStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface StopOutlinedStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const StopOutlinedStandard: StopOutlinedStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={StopOutlinedStandardSvg}></PfIcon>;
};

StopOutlinedStandard.displayName = 'StopOutlinedStandard';
StopOutlinedStandard.inheritAttrs = false;
export default StopOutlinedStandard;