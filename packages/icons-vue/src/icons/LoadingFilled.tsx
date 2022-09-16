// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LoadingFilledSvg from 'pf-icon-svg/es/asn/LoadingFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface LoadingFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const LoadingFilled: LoadingFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={LoadingFilledSvg}></PfIcon>;
};

LoadingFilled.displayName = 'LoadingFilled';
LoadingFilled.inheritAttrs = false;
export default LoadingFilled;