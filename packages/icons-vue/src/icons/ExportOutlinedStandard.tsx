// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ExportOutlinedStandardSvg from '@pf-ui/pf-icon-svg/es/asn/ExportOutlinedStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface ExportOutlinedStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const ExportOutlinedStandard: ExportOutlinedStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={ExportOutlinedStandardSvg}></PfIcon>;
};

ExportOutlinedStandard.displayName = 'ExportOutlinedStandard';
ExportOutlinedStandard.inheritAttrs = false;
export default ExportOutlinedStandard;