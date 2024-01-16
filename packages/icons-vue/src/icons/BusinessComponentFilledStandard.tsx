// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BusinessComponentFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/BusinessComponentFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface BusinessComponentFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const BusinessComponentFilledStandard: BusinessComponentFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={BusinessComponentFilledStandardSvg}></PfIcon>;
};

BusinessComponentFilledStandard.displayName = 'BusinessComponentFilledStandard';
BusinessComponentFilledStandard.inheritAttrs = false;
export default BusinessComponentFilledStandard;