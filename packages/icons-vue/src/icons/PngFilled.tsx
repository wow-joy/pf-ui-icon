// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PngFilledSvg from 'pf-icon-svg/es/asn/PngFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface PngFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const PngFilled: PngFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={PngFilledSvg}></PfIcon>;
};

PngFilled.displayName = 'PngFilled';
PngFilled.inheritAttrs = false;
export default PngFilled;