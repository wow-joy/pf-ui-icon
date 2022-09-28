// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MsgTwoToneSvg from '@pf-ui/pf-icon-svg/es/asn/MsgTwoTone';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface MsgTwoToneIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const MsgTwoTone: MsgTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={MsgTwoToneSvg}></PfIcon>;
};

MsgTwoTone.displayName = 'MsgTwoTone';
MsgTwoTone.inheritAttrs = false;
export default MsgTwoTone;