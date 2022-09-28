// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RightArrowFilledSvg from '@pf-ui/pf-icon-svg/es/asn/RightArrowFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface RightArrowFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const RightArrowFilled: RightArrowFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={RightArrowFilledSvg}></PfIcon>;
};

RightArrowFilled.displayName = 'RightArrowFilled';
RightArrowFilled.inheritAttrs = false;
export default RightArrowFilled;