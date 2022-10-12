// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowLeftOutlinedSvg from '@pf-ui/pf-icon-svg/es/asn/ArrowLeftOutlined';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface ArrowLeftOutlinedIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const ArrowLeftOutlined: ArrowLeftOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={ArrowLeftOutlinedSvg}></PfIcon>;
};

ArrowLeftOutlined.displayName = 'ArrowLeftOutlined';
ArrowLeftOutlined.inheritAttrs = false;
export default ArrowLeftOutlined;