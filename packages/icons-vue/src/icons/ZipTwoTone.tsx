// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ZipTwoToneSvg from 'pf-icon-svg/es/asn/ZipTwoTone';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface ZipTwoToneIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const ZipTwoTone: ZipTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={ZipTwoToneSvg}></PfIcon>;
};

ZipTwoTone.displayName = 'ZipTwoTone';
ZipTwoTone.inheritAttrs = false;
export default ZipTwoTone;