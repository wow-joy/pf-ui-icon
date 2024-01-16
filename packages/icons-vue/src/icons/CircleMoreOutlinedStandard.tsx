// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CircleMoreOutlinedStandardSvg from '@pf-ui/pf-icon-svg/es/asn/CircleMoreOutlinedStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface CircleMoreOutlinedStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const CircleMoreOutlinedStandard: CircleMoreOutlinedStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={CircleMoreOutlinedStandardSvg}></PfIcon>;
};

CircleMoreOutlinedStandard.displayName = 'CircleMoreOutlinedStandard';
CircleMoreOutlinedStandard.inheritAttrs = false;
export default CircleMoreOutlinedStandard;