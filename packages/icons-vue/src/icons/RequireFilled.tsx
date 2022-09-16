// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RequireFilledSvg from 'pf-icon-svg/es/asn/RequireFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface RequireFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const RequireFilled: RequireFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={RequireFilledSvg}></PfIcon>;
};

RequireFilled.displayName = 'RequireFilled';
RequireFilled.inheritAttrs = false;
export default RequireFilled;