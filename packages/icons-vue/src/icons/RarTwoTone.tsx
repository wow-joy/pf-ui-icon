// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RarTwoToneSvg from '@pf-ui/pf-icon-svg/es/asn/RarTwoTone';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface RarTwoToneIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const RarTwoTone: RarTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={RarTwoToneSvg}></PfIcon>;
};

RarTwoTone.displayName = 'RarTwoTone';
RarTwoTone.inheritAttrs = false;
export default RarTwoTone;