// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RarFilledSvg from 'pf-icon-svg/es/asn/RarFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface RarFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const RarFilled: RarFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={RarFilledSvg}></PfIcon>;
};

RarFilled.displayName = 'RarFilled';
RarFilled.inheritAttrs = false;
export default RarFilled;