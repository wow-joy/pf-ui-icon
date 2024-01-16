// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MailFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/MailFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface MailFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const MailFilledStandard: MailFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={MailFilledStandardSvg}></PfIcon>;
};

MailFilledStandard.displayName = 'MailFilledStandard';
MailFilledStandard.inheritAttrs = false;
export default MailFilledStandard;