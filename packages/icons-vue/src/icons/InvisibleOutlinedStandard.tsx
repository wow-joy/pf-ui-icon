// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import InvisibleOutlinedStandardSvg from '@pf-ui/pf-icon-svg/es/asn/InvisibleOutlinedStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface InvisibleOutlinedStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const InvisibleOutlinedStandard: InvisibleOutlinedStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={InvisibleOutlinedStandardSvg}></PfIcon>;
};

InvisibleOutlinedStandard.displayName = 'InvisibleOutlinedStandard';
InvisibleOutlinedStandard.inheritAttrs = false;
export default InvisibleOutlinedStandard;