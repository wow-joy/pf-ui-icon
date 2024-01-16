// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FemaleFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/FemaleFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface FemaleFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const FemaleFilledStandard: FemaleFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={FemaleFilledStandardSvg}></PfIcon>;
};

FemaleFilledStandard.displayName = 'FemaleFilledStandard';
FemaleFilledStandard.inheritAttrs = false;
export default FemaleFilledStandard;