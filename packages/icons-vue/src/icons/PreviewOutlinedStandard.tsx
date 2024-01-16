// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PreviewOutlinedStandardSvg from '@pf-ui/pf-icon-svg/es/asn/PreviewOutlinedStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface PreviewOutlinedStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const PreviewOutlinedStandard: PreviewOutlinedStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={PreviewOutlinedStandardSvg}></PfIcon>;
};

PreviewOutlinedStandard.displayName = 'PreviewOutlinedStandard';
PreviewOutlinedStandard.inheritAttrs = false;
export default PreviewOutlinedStandard;