// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SuccessTwoToneSvg from '@pf-ui/pf-icon-svg/es/asn/SuccessTwoTone';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface SuccessTwoToneIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const SuccessTwoTone: SuccessTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={SuccessTwoToneSvg}></PfIcon>;
};

SuccessTwoTone.displayName = 'SuccessTwoTone';
SuccessTwoTone.inheritAttrs = false;
export default SuccessTwoTone;