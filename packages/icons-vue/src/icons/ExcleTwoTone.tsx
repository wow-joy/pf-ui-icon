// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ExcleTwoToneSvg from '@pf-ui/pf-icon-svg/es/asn/ExcleTwoTone';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface ExcleTwoToneIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const ExcleTwoTone: ExcleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={ExcleTwoToneSvg}></PfIcon>;
};

ExcleTwoTone.displayName = 'ExcleTwoTone';
ExcleTwoTone.inheritAttrs = false;
export default ExcleTwoTone;