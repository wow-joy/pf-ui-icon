// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CheckCircleOutlinedStandardSvg from '@pf-ui/pf-icon-svg/es/asn/CheckCircleOutlinedStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface CheckCircleOutlinedStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const CheckCircleOutlinedStandard: CheckCircleOutlinedStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={CheckCircleOutlinedStandardSvg}></PfIcon>;
};

CheckCircleOutlinedStandard.displayName = 'CheckCircleOutlinedStandard';
CheckCircleOutlinedStandard.inheritAttrs = false;
export default CheckCircleOutlinedStandard;