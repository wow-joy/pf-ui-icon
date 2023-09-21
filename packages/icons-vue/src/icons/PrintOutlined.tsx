// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PrintOutlinedSvg from '@pf-ui/pf-icon-svg/es/asn/PrintOutlined';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface PrintOutlinedIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const PrintOutlined: PrintOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={PrintOutlinedSvg}></PfIcon>;
};

PrintOutlined.displayName = 'PrintOutlined';
PrintOutlined.inheritAttrs = false;
export default PrintOutlined;