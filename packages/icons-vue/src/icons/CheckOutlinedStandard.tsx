// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CheckOutlinedStandardSvg from '@pf-ui/pf-icon-svg/es/asn/CheckOutlinedStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface CheckOutlinedStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const CheckOutlinedStandard: CheckOutlinedStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={CheckOutlinedStandardSvg}></PfIcon>;
};

CheckOutlinedStandard.displayName = 'CheckOutlinedStandard';
CheckOutlinedStandard.inheritAttrs = false;
export default CheckOutlinedStandard;