// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PlusCircleOutlinedStandardSvg from '@pf-ui/pf-icon-svg/es/asn/PlusCircleOutlinedStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface PlusCircleOutlinedStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const PlusCircleOutlinedStandard: PlusCircleOutlinedStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={PlusCircleOutlinedStandardSvg}></PfIcon>;
};

PlusCircleOutlinedStandard.displayName = 'PlusCircleOutlinedStandard';
PlusCircleOutlinedStandard.inheritAttrs = false;
export default PlusCircleOutlinedStandard;