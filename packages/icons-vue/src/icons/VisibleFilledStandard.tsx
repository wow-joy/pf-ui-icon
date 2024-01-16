// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VisibleFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/VisibleFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface VisibleFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const VisibleFilledStandard: VisibleFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={VisibleFilledStandardSvg}></PfIcon>;
};

VisibleFilledStandard.displayName = 'VisibleFilledStandard';
VisibleFilledStandard.inheritAttrs = false;
export default VisibleFilledStandard;