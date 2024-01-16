// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ToBottomFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/ToBottomFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface ToBottomFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const ToBottomFilledStandard: ToBottomFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={ToBottomFilledStandardSvg}></PfIcon>;
};

ToBottomFilledStandard.displayName = 'ToBottomFilledStandard';
ToBottomFilledStandard.inheritAttrs = false;
export default ToBottomFilledStandard;