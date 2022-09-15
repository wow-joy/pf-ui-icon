// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NoDataFilledSvg from 'pf-icon-svg/es/asn/NoDataFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NoDataFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NoDataFilled: NoDataFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NoDataFilledSvg}></AntdIcon>;
};

NoDataFilled.displayName = 'NoDataFilled';
NoDataFilled.inheritAttrs = false;
export default NoDataFilled;