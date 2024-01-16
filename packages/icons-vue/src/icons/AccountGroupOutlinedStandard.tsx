// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AccountGroupOutlinedStandardSvg from '@pf-ui/pf-icon-svg/es/asn/AccountGroupOutlinedStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface AccountGroupOutlinedStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const AccountGroupOutlinedStandard: AccountGroupOutlinedStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={AccountGroupOutlinedStandardSvg}></PfIcon>;
};

AccountGroupOutlinedStandard.displayName = 'AccountGroupOutlinedStandard';
AccountGroupOutlinedStandard.inheritAttrs = false;
export default AccountGroupOutlinedStandard;