// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import InternalErrorTwoToneSvg from '@pf-ui/pf-icon-svg/es/asn/InternalErrorTwoTone';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface InternalErrorTwoToneIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const InternalErrorTwoTone: InternalErrorTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={InternalErrorTwoToneSvg}></PfIcon>;
};

InternalErrorTwoTone.displayName = 'InternalErrorTwoTone';
InternalErrorTwoTone.inheritAttrs = false;
export default InternalErrorTwoTone;