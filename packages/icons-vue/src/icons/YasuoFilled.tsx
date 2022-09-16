// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import YasuoFilledSvg from 'pf-icon-svg/es/asn/YasuoFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface YasuoFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const YasuoFilled: YasuoFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={YasuoFilledSvg}></PfIcon>;
};

YasuoFilled.displayName = 'YasuoFilled';
YasuoFilled.inheritAttrs = false;
export default YasuoFilled;