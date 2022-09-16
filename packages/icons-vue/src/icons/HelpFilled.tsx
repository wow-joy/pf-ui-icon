// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HelpFilledSvg from 'pf-icon-svg/es/asn/HelpFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface HelpFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const HelpFilled: HelpFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={HelpFilledSvg}></PfIcon>;
};

HelpFilled.displayName = 'HelpFilled';
HelpFilled.inheritAttrs = false;
export default HelpFilled;