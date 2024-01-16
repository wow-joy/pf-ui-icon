// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ClockOutlinedStandardSvg from '@pf-ui/pf-icon-svg/es/asn/ClockOutlinedStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface ClockOutlinedStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const ClockOutlinedStandard: ClockOutlinedStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={ClockOutlinedStandardSvg}></PfIcon>;
};

ClockOutlinedStandard.displayName = 'ClockOutlinedStandard';
ClockOutlinedStandard.inheritAttrs = false;
export default ClockOutlinedStandard;