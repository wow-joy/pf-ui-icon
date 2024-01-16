// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ApplicationFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/ApplicationFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface ApplicationFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const ApplicationFilledStandard: ApplicationFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={ApplicationFilledStandardSvg}></PfIcon>;
};

ApplicationFilledStandard.displayName = 'ApplicationFilledStandard';
ApplicationFilledStandard.inheritAttrs = false;
export default ApplicationFilledStandard;