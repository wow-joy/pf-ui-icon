// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TxtTwoToneSvg from 'pf-icon-svg/es/asn/TxtTwoTone';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface TxtTwoToneIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const TxtTwoTone: TxtTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={TxtTwoToneSvg}></PfIcon>;
};

TxtTwoTone.displayName = 'TxtTwoTone';
TxtTwoTone.inheritAttrs = false;
export default TxtTwoTone;