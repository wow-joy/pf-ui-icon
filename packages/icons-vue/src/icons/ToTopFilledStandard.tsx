// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ToTopFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/ToTopFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface ToTopFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const ToTopFilledStandard: ToTopFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={ToTopFilledStandardSvg}></PfIcon>;
};

ToTopFilledStandard.displayName = 'ToTopFilledStandard';
ToTopFilledStandard.inheritAttrs = false;
export default ToTopFilledStandard;