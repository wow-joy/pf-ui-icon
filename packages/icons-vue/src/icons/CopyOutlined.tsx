// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CopyOutlinedSvg from '@pf-ui/pf-icon-svg/es/asn/CopyOutlined';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface CopyOutlinedIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const CopyOutlined: CopyOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={CopyOutlinedSvg}></PfIcon>;
};

CopyOutlined.displayName = 'CopyOutlined';
CopyOutlined.inheritAttrs = false;
export default CopyOutlined;