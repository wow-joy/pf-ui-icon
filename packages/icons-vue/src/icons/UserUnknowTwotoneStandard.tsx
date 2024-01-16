// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserUnknowTwotoneStandardSvg from '@pf-ui/pf-icon-svg/es/asn/UserUnknowTwotoneStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface UserUnknowTwotoneStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const UserUnknowTwotoneStandard: UserUnknowTwotoneStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={UserUnknowTwotoneStandardSvg}></PfIcon>;
};

UserUnknowTwotoneStandard.displayName = 'UserUnknowTwotoneStandard';
UserUnknowTwotoneStandard.inheritAttrs = false;
export default UserUnknowTwotoneStandard;