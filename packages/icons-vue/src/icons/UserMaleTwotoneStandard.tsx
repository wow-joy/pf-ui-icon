// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserMaleTwotoneStandardSvg from '@pf-ui/pf-icon-svg/es/asn/UserMaleTwotoneStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface UserMaleTwotoneStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const UserMaleTwotoneStandard: UserMaleTwotoneStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={UserMaleTwotoneStandardSvg}></PfIcon>;
};

UserMaleTwotoneStandard.displayName = 'UserMaleTwotoneStandard';
UserMaleTwotoneStandard.inheritAttrs = false;
export default UserMaleTwotoneStandard;