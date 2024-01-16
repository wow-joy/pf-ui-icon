// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloseOutlinedStandardSvg from '@pf-ui/pf-icon-svg/es/asn/CloseOutlinedStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface CloseOutlinedStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const CloseOutlinedStandard: CloseOutlinedStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={CloseOutlinedStandardSvg}></PfIcon>;
};

CloseOutlinedStandard.displayName = 'CloseOutlinedStandard';
CloseOutlinedStandard.inheritAttrs = false;
export default CloseOutlinedStandard;