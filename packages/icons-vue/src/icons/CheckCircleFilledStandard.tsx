// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CheckCircleFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/CheckCircleFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface CheckCircleFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const CheckCircleFilledStandard: CheckCircleFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={CheckCircleFilledStandardSvg}></PfIcon>;
};

CheckCircleFilledStandard.displayName = 'CheckCircleFilledStandard';
CheckCircleFilledStandard.inheritAttrs = false;
export default CheckCircleFilledStandard;