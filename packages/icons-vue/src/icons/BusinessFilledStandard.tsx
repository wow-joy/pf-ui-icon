// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BusinessFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/BusinessFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface BusinessFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const BusinessFilledStandard: BusinessFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={BusinessFilledStandardSvg}></PfIcon>;
};

BusinessFilledStandard.displayName = 'BusinessFilledStandard';
BusinessFilledStandard.inheritAttrs = false;
export default BusinessFilledStandard;