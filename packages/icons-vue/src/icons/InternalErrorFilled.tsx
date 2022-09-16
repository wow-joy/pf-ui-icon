// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import InternalErrorFilledSvg from 'pf-icon-svg/es/asn/InternalErrorFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface InternalErrorFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const InternalErrorFilled: InternalErrorFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={InternalErrorFilledSvg}></PfIcon>;
};

InternalErrorFilled.displayName = 'InternalErrorFilled';
InternalErrorFilled.inheritAttrs = false;
export default InternalErrorFilled;