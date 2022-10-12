// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowRightOutlinedSvg from '@pf-ui/pf-icon-svg/es/asn/ArrowRightOutlined';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface ArrowRightOutlinedIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const ArrowRightOutlined: ArrowRightOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={ArrowRightOutlinedSvg}></PfIcon>;
};

ArrowRightOutlined.displayName = 'ArrowRightOutlined';
ArrowRightOutlined.inheritAttrs = false;
export default ArrowRightOutlined;