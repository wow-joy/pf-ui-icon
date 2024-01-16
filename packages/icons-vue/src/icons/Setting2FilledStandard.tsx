// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Setting2FilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/Setting2FilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface Setting2FilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const Setting2FilledStandard: Setting2FilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={Setting2FilledStandardSvg}></PfIcon>;
};

Setting2FilledStandard.displayName = 'Setting2FilledStandard';
Setting2FilledStandard.inheritAttrs = false;
export default Setting2FilledStandard;