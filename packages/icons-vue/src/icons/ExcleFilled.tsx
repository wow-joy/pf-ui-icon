// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ExcleFilledSvg from 'pf-icon-svg/es/asn/ExcleFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface ExcleFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const ExcleFilled: ExcleFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={ExcleFilledSvg}></PfIcon>;
};

ExcleFilled.displayName = 'ExcleFilled';
ExcleFilled.inheritAttrs = false;
export default ExcleFilled;