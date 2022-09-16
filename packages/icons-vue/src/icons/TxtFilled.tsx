// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TxtFilledSvg from 'pf-icon-svg/es/asn/TxtFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface TxtFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const TxtFilled: TxtFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={TxtFilledSvg}></PfIcon>;
};

TxtFilled.displayName = 'TxtFilled';
TxtFilled.inheritAttrs = false;
export default TxtFilled;