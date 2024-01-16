// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AuthorityManageFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/AuthorityManageFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface AuthorityManageFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const AuthorityManageFilledStandard: AuthorityManageFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={AuthorityManageFilledStandardSvg}></PfIcon>;
};

AuthorityManageFilledStandard.displayName = 'AuthorityManageFilledStandard';
AuthorityManageFilledStandard.inheritAttrs = false;
export default AuthorityManageFilledStandard;