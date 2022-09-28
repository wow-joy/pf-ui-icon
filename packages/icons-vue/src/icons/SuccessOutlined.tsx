// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SuccessOutlinedSvg from '@pf-ui/pf-icon-svg/es/asn/SuccessOutlined';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface SuccessOutlinedIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const SuccessOutlined: SuccessOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={SuccessOutlinedSvg}></PfIcon>;
};

SuccessOutlined.displayName = 'SuccessOutlined';
SuccessOutlined.inheritAttrs = false;
export default SuccessOutlined;