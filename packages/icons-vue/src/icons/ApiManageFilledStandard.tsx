// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ApiManageFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/ApiManageFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface ApiManageFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const ApiManageFilledStandard: ApiManageFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={ApiManageFilledStandardSvg}></PfIcon>;
};

ApiManageFilledStandard.displayName = 'ApiManageFilledStandard';
ApiManageFilledStandard.inheritAttrs = false;
export default ApiManageFilledStandard;