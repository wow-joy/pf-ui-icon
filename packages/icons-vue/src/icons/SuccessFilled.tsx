// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SuccessFilledSvg from 'pf-icon-svg/es/asn/SuccessFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface SuccessFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const SuccessFilled: SuccessFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={SuccessFilledSvg}></PfIcon>;
};

SuccessFilled.displayName = 'SuccessFilled';
SuccessFilled.inheritAttrs = false;
export default SuccessFilled;