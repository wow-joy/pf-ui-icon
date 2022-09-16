// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NoDataFilledSvg from 'pf-icon-svg/es/asn/NoDataFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface NoDataFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const NoDataFilled: NoDataFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={NoDataFilledSvg}></PfIcon>;
};

NoDataFilled.displayName = 'NoDataFilled';
NoDataFilled.inheritAttrs = false;
export default NoDataFilled;