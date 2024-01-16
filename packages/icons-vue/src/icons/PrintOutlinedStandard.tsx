// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PrintOutlinedStandardSvg from '@pf-ui/pf-icon-svg/es/asn/PrintOutlinedStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface PrintOutlinedStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const PrintOutlinedStandard: PrintOutlinedStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={PrintOutlinedStandardSvg}></PfIcon>;
};

PrintOutlinedStandard.displayName = 'PrintOutlinedStandard';
PrintOutlinedStandard.inheritAttrs = false;
export default PrintOutlinedStandard;