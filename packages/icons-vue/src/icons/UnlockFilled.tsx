// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UnlockFilledSvg from 'pf-icon-svg/es/asn/UnlockFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface UnlockFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const UnlockFilled: UnlockFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={UnlockFilledSvg}></PfIcon>;
};

UnlockFilled.displayName = 'UnlockFilled';
UnlockFilled.inheritAttrs = false;
export default UnlockFilled;