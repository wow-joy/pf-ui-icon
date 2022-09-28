// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PngTwoToneSvg from '@pf-ui/pf-icon-svg/es/asn/PngTwoTone';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface PngTwoToneIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const PngTwoTone: PngTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={PngTwoToneSvg}></PfIcon>;
};

PngTwoTone.displayName = 'PngTwoTone';
PngTwoTone.inheritAttrs = false;
export default PngTwoTone;