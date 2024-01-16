// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RotateRightOutlinedStandardSvg from '@pf-ui/pf-icon-svg/es/asn/RotateRightOutlinedStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface RotateRightOutlinedStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const RotateRightOutlinedStandard: RotateRightOutlinedStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={RotateRightOutlinedStandardSvg}></PfIcon>;
};

RotateRightOutlinedStandard.displayName = 'RotateRightOutlinedStandard';
RotateRightOutlinedStandard.inheritAttrs = false;
export default RotateRightOutlinedStandard;