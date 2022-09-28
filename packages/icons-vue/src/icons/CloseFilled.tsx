// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloseFilledSvg from '@pf-ui/pf-icon-svg/es/asn/CloseFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface CloseFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const CloseFilled: CloseFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={CloseFilledSvg}></PfIcon>;
};

CloseFilled.displayName = 'CloseFilled';
CloseFilled.inheritAttrs = false;
export default CloseFilled;