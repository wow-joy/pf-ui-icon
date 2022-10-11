// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RotateLeftOutlinedSvg from '@pf-ui/pf-icon-svg/es/asn/RotateLeftOutlined';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface RotateLeftOutlinedIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const RotateLeftOutlined: RotateLeftOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={RotateLeftOutlinedSvg}></PfIcon>;
};

RotateLeftOutlined.displayName = 'RotateLeftOutlined';
RotateLeftOutlined.inheritAttrs = false;
export default RotateLeftOutlined;