// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PlusOutlinedStandardSvg from '@pf-ui/pf-icon-svg/es/asn/PlusOutlinedStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface PlusOutlinedStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const PlusOutlinedStandard: PlusOutlinedStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={PlusOutlinedStandardSvg}></PfIcon>;
};

PlusOutlinedStandard.displayName = 'PlusOutlinedStandard';
PlusOutlinedStandard.inheritAttrs = false;
export default PlusOutlinedStandard;