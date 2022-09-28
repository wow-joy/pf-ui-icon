// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import YasuoTwoToneSvg from '@pf-ui/pf-icon-svg/es/asn/YasuoTwoTone';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface YasuoTwoToneIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const YasuoTwoTone: YasuoTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={YasuoTwoToneSvg}></PfIcon>;
};

YasuoTwoTone.displayName = 'YasuoTwoTone';
YasuoTwoTone.inheritAttrs = false;
export default YasuoTwoTone;