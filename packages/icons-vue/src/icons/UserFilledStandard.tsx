// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/UserFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface UserFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const UserFilledStandard: UserFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={UserFilledStandardSvg}></PfIcon>;
};

UserFilledStandard.displayName = 'UserFilledStandard';
UserFilledStandard.inheritAttrs = false;
export default UserFilledStandard;