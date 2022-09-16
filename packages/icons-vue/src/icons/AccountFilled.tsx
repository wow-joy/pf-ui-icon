// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AccountFilledSvg from 'pf-icon-svg/es/asn/AccountFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface AccountFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const AccountFilled: AccountFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={AccountFilledSvg}></PfIcon>;
};

AccountFilled.displayName = 'AccountFilled';
AccountFilled.inheritAttrs = false;
export default AccountFilled;