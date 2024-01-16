// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MerchantFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/MerchantFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface MerchantFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const MerchantFilledStandard: MerchantFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={MerchantFilledStandardSvg}></PfIcon>;
};

MerchantFilledStandard.displayName = 'MerchantFilledStandard';
MerchantFilledStandard.inheritAttrs = false;
export default MerchantFilledStandard;