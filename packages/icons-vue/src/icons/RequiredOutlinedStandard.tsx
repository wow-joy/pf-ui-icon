// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RequiredOutlinedStandardSvg from '@pf-ui/pf-icon-svg/es/asn/RequiredOutlinedStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface RequiredOutlinedStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const RequiredOutlinedStandard: RequiredOutlinedStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={RequiredOutlinedStandardSvg}></PfIcon>;
};

RequiredOutlinedStandard.displayName = 'RequiredOutlinedStandard';
RequiredOutlinedStandard.inheritAttrs = false;
export default RequiredOutlinedStandard;