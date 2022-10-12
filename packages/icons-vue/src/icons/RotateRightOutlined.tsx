// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RotateRightOutlinedSvg from '@pf-ui/pf-icon-svg/es/asn/RotateRightOutlined';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface RotateRightOutlinedIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const RotateRightOutlined: RotateRightOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={RotateRightOutlinedSvg}></PfIcon>;
};

RotateRightOutlined.displayName = 'RotateRightOutlined';
RotateRightOutlined.inheritAttrs = false;
export default RotateRightOutlined;