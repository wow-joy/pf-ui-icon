// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TitleFilledSvg from 'pf-icon-svg/es/asn/TitleFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface TitleFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const TitleFilled: TitleFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={TitleFilledSvg}></PfIcon>;
};

TitleFilled.displayName = 'TitleFilled';
TitleFilled.inheritAttrs = false;
export default TitleFilled;