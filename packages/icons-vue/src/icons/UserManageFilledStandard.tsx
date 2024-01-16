// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserManageFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/UserManageFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface UserManageFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const UserManageFilledStandard: UserManageFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={UserManageFilledStandardSvg}></PfIcon>;
};

UserManageFilledStandard.displayName = 'UserManageFilledStandard';
UserManageFilledStandard.inheritAttrs = false;
export default UserManageFilledStandard;