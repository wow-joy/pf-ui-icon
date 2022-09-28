// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TopHoverFilledSvg from '@pf-ui/pf-icon-svg/es/asn/TopHoverFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface TopHoverFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const TopHoverFilled: TopHoverFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={TopHoverFilledSvg}></PfIcon>;
};

TopHoverFilled.displayName = 'TopHoverFilled';
TopHoverFilled.inheritAttrs = false;
export default TopHoverFilled;