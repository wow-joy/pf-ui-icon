// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowDownFilledSvg from '@pf-ui/pf-icon-svg/es/asn/ArrowDownFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface ArrowDownFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const ArrowDownFilled: ArrowDownFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={ArrowDownFilledSvg}></PfIcon>;
};

ArrowDownFilled.displayName = 'ArrowDownFilled';
ArrowDownFilled.inheritAttrs = false;
export default ArrowDownFilled;