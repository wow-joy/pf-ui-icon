// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ZipFilledSvg from 'pf-icon-svg/es/asn/ZipFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface ZipFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const ZipFilled: ZipFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={ZipFilledSvg}></PfIcon>;
};

ZipFilled.displayName = 'ZipFilled';
ZipFilled.inheritAttrs = false;
export default ZipFilled;