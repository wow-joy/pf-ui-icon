// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import JpgFilledSvg from 'pf-icon-svg/es/asn/JpgFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface JpgFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const JpgFilled: JpgFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={JpgFilledSvg}></PfIcon>;
};

JpgFilled.displayName = 'JpgFilled';
JpgFilled.inheritAttrs = false;
export default JpgFilled;