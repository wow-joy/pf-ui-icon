// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RefreshFilledSvg from '@pf-ui/pf-icon-svg/es/asn/RefreshFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface RefreshFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const RefreshFilled: RefreshFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={RefreshFilledSvg}></PfIcon>;
};

RefreshFilled.displayName = 'RefreshFilled';
RefreshFilled.inheritAttrs = false;
export default RefreshFilled;