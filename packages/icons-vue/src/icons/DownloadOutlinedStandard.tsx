// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DownloadOutlinedStandardSvg from '@pf-ui/pf-icon-svg/es/asn/DownloadOutlinedStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface DownloadOutlinedStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const DownloadOutlinedStandard: DownloadOutlinedStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={DownloadOutlinedStandardSvg}></PfIcon>;
};

DownloadOutlinedStandard.displayName = 'DownloadOutlinedStandard';
DownloadOutlinedStandard.inheritAttrs = false;
export default DownloadOutlinedStandard;