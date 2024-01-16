// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MailConfigFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/MailConfigFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface MailConfigFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const MailConfigFilledStandard: MailConfigFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={MailConfigFilledStandardSvg}></PfIcon>;
};

MailConfigFilledStandard.displayName = 'MailConfigFilledStandard';
MailConfigFilledStandard.inheritAttrs = false;
export default MailConfigFilledStandard;