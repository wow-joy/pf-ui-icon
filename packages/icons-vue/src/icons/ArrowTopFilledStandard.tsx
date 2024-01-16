// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowTopFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/ArrowTopFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface ArrowTopFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const ArrowTopFilledStandard: ArrowTopFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={ArrowTopFilledStandardSvg}></PfIcon>;
};

ArrowTopFilledStandard.displayName = 'ArrowTopFilledStandard';
ArrowTopFilledStandard.inheritAttrs = false;
export default ArrowTopFilledStandard;