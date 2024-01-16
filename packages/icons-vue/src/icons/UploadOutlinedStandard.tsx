// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UploadOutlinedStandardSvg from '@pf-ui/pf-icon-svg/es/asn/UploadOutlinedStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface UploadOutlinedStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const UploadOutlinedStandard: UploadOutlinedStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={UploadOutlinedStandardSvg}></PfIcon>;
};

UploadOutlinedStandard.displayName = 'UploadOutlinedStandard';
UploadOutlinedStandard.inheritAttrs = false;
export default UploadOutlinedStandard;