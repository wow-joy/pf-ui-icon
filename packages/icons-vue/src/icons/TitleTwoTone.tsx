// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TitleTwoToneSvg from 'pf-icon-svg/es/asn/TitleTwoTone';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface TitleTwoToneIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const TitleTwoTone: TitleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={TitleTwoToneSvg}></PfIcon>;
};

TitleTwoTone.displayName = 'TitleTwoTone';
TitleTwoTone.inheritAttrs = false;
export default TitleTwoTone;