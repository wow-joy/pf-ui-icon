// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserFemaleTwotoneStandardSvg from '@pf-ui/pf-icon-svg/es/asn/UserFemaleTwotoneStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface UserFemaleTwotoneStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const UserFemaleTwotoneStandard: UserFemaleTwotoneStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={UserFemaleTwotoneStandardSvg}></PfIcon>;
};

UserFemaleTwotoneStandard.displayName = 'UserFemaleTwotoneStandard';
UserFemaleTwotoneStandard.inheritAttrs = false;
export default UserFemaleTwotoneStandard;