// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MsgFilledSvg from 'pf-icon-svg/es/asn/MsgFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface MsgFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const MsgFilled: MsgFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={MsgFilledSvg}></PfIcon>;
};

MsgFilled.displayName = 'MsgFilled';
MsgFilled.inheritAttrs = false;
export default MsgFilled;