// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RotateLeftOutlinedStandardSvg from '@pf-ui/pf-icon-svg/es/asn/RotateLeftOutlinedStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface RotateLeftOutlinedStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const RotateLeftOutlinedStandard: RotateLeftOutlinedStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={RotateLeftOutlinedStandardSvg}></PfIcon>;
};

RotateLeftOutlinedStandard.displayName = 'RotateLeftOutlinedStandard';
RotateLeftOutlinedStandard.inheritAttrs = false;
export default RotateLeftOutlinedStandard;