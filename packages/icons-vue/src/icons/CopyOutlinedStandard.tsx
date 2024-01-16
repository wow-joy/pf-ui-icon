// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CopyOutlinedStandardSvg from '@pf-ui/pf-icon-svg/es/asn/CopyOutlinedStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface CopyOutlinedStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const CopyOutlinedStandard: CopyOutlinedStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={CopyOutlinedStandardSvg}></PfIcon>;
};

CopyOutlinedStandard.displayName = 'CopyOutlinedStandard';
CopyOutlinedStandard.inheritAttrs = false;
export default CopyOutlinedStandard;