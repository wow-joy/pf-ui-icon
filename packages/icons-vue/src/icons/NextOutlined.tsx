// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NextOutlinedSvg from 'pf-icon-svg/es/asn/NextOutlined';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface NextOutlinedIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const NextOutlined: NextOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={NextOutlinedSvg}></PfIcon>;
};

NextOutlined.displayName = 'NextOutlined';
NextOutlined.inheritAttrs = false;
export default NextOutlined;