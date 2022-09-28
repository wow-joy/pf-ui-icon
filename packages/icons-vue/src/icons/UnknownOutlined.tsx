// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UnknownOutlinedSvg from '@pf-ui/pf-icon-svg/es/asn/UnknownOutlined';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface UnknownOutlinedIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const UnknownOutlined: UnknownOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={UnknownOutlinedSvg}></PfIcon>;
};

UnknownOutlined.displayName = 'UnknownOutlined';
UnknownOutlined.inheritAttrs = false;
export default UnknownOutlined;