// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MaintainingFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/MaintainingFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface MaintainingFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const MaintainingFilledStandard: MaintainingFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={MaintainingFilledStandardSvg}></PfIcon>;
};

MaintainingFilledStandard.displayName = 'MaintainingFilledStandard';
MaintainingFilledStandard.inheritAttrs = false;
export default MaintainingFilledStandard;