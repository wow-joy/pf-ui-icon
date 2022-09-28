// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PptTwoToneSvg from '@pf-ui/pf-icon-svg/es/asn/PptTwoTone';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface PptTwoToneIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const PptTwoTone: PptTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={PptTwoToneSvg}></PfIcon>;
};

PptTwoTone.displayName = 'PptTwoTone';
PptTwoTone.inheritAttrs = false;
export default PptTwoTone;