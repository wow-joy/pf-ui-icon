// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserManagerFilledSvg from 'pf-icon-svg/es/asn/UserManagerFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface UserManagerFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const UserManagerFilled: UserManagerFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={UserManagerFilledSvg}></PfIcon>;
};

UserManagerFilled.displayName = 'UserManagerFilled';
UserManagerFilled.inheritAttrs = false;
export default UserManagerFilled;