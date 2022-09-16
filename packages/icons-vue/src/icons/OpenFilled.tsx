// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import OpenFilledSvg from 'pf-icon-svg/es/asn/OpenFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface OpenFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const OpenFilled: OpenFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={OpenFilledSvg}></PfIcon>;
};

OpenFilled.displayName = 'OpenFilled';
OpenFilled.inheritAttrs = false;
export default OpenFilled;