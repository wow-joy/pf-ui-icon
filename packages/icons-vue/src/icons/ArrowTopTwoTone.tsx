// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowTopTwoToneSvg from '@pf-ui/pf-icon-svg/es/asn/ArrowTopTwoTone';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface ArrowTopTwoToneIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const ArrowTopTwoTone: ArrowTopTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={ArrowTopTwoToneSvg}></PfIcon>;
};

ArrowTopTwoTone.displayName = 'ArrowTopTwoTone';
ArrowTopTwoTone.inheritAttrs = false;
export default ArrowTopTwoTone;