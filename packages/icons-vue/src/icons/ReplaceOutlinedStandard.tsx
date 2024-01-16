// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReplaceOutlinedStandardSvg from '@pf-ui/pf-icon-svg/es/asn/ReplaceOutlinedStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface ReplaceOutlinedStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const ReplaceOutlinedStandard: ReplaceOutlinedStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={ReplaceOutlinedStandardSvg}></PfIcon>;
};

ReplaceOutlinedStandard.displayName = 'ReplaceOutlinedStandard';
ReplaceOutlinedStandard.inheritAttrs = false;
export default ReplaceOutlinedStandard;