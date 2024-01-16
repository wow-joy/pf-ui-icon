// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RefreshOutlinedStandardSvg from '@pf-ui/pf-icon-svg/es/asn/RefreshOutlinedStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface RefreshOutlinedStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const RefreshOutlinedStandard: RefreshOutlinedStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={RefreshOutlinedStandardSvg}></PfIcon>;
};

RefreshOutlinedStandard.displayName = 'RefreshOutlinedStandard';
RefreshOutlinedStandard.inheritAttrs = false;
export default RefreshOutlinedStandard;