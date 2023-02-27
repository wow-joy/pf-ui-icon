// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowDownTwoToneSvg from '@pf-ui/pf-icon-svg/es/asn/ArrowDownTwoTone';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface ArrowDownTwoToneIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const ArrowDownTwoTone: ArrowDownTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={ArrowDownTwoToneSvg}></PfIcon>;
};

ArrowDownTwoTone.displayName = 'ArrowDownTwoTone';
ArrowDownTwoTone.inheritAttrs = false;
export default ArrowDownTwoTone;