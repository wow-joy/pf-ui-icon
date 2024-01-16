// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EnterpriseUserManageFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/EnterpriseUserManageFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface EnterpriseUserManageFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const EnterpriseUserManageFilledStandard: EnterpriseUserManageFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={EnterpriseUserManageFilledStandardSvg}></PfIcon>;
};

EnterpriseUserManageFilledStandard.displayName = 'EnterpriseUserManageFilledStandard';
EnterpriseUserManageFilledStandard.inheritAttrs = false;
export default EnterpriseUserManageFilledStandard;