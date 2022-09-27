// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NoDataTwoToneSvg from 'pf-icon-svg/es/asn/NoDataTwoTone';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface NoDataTwoToneIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const NoDataTwoTone: NoDataTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={NoDataTwoToneSvg}></PfIcon>;
};

NoDataTwoTone.displayName = 'NoDataTwoTone';
NoDataTwoTone.inheritAttrs = false;
export default NoDataTwoTone;