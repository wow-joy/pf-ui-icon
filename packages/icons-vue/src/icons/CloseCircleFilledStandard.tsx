// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloseCircleFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/CloseCircleFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface CloseCircleFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const CloseCircleFilledStandard: CloseCircleFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={CloseCircleFilledStandardSvg}></PfIcon>;
};

CloseCircleFilledStandard.displayName = 'CloseCircleFilledStandard';
CloseCircleFilledStandard.inheritAttrs = false;
export default CloseCircleFilledStandard;