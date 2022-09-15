// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LoadingFilledSvg from 'pf-icon-svg/es/asn/LoadingFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LoadingFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LoadingFilled: LoadingFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LoadingFilledSvg}></AntdIcon>;
};

LoadingFilled.displayName = 'LoadingFilled';
LoadingFilled.inheritAttrs = false;
export default LoadingFilled;