// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import JpgTwoToneSvg from 'pf-icon-svg/es/asn/JpgTwoTone';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface JpgTwoToneIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const JpgTwoTone: JpgTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={JpgTwoToneSvg}></PfIcon>;
};

JpgTwoTone.displayName = 'JpgTwoTone';
JpgTwoTone.inheritAttrs = false;
export default JpgTwoTone;