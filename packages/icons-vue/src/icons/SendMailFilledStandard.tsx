// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SendMailFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/SendMailFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface SendMailFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const SendMailFilledStandard: SendMailFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={SendMailFilledStandardSvg}></PfIcon>;
};

SendMailFilledStandard.displayName = 'SendMailFilledStandard';
SendMailFilledStandard.inheritAttrs = false;
export default SendMailFilledStandard;