// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowDownFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/ArrowDownFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface ArrowDownFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const ArrowDownFilledStandard: ArrowDownFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={ArrowDownFilledStandardSvg}></PfIcon>;
};

ArrowDownFilledStandard.displayName = 'ArrowDownFilledStandard';
ArrowDownFilledStandard.inheritAttrs = false;
export default ArrowDownFilledStandard;