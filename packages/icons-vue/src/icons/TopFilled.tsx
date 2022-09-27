// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TopFilledSvg from 'pf-icon-svg/es/asn/TopFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface TopFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const TopFilled: TopFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={TopFilledSvg}></PfIcon>;
};

TopFilled.displayName = 'TopFilled';
TopFilled.inheritAttrs = false;
export default TopFilled;