// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import OrganizationFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/OrganizationFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface OrganizationFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const OrganizationFilledStandard: OrganizationFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={OrganizationFilledStandardSvg}></PfIcon>;
};

OrganizationFilledStandard.displayName = 'OrganizationFilledStandard';
OrganizationFilledStandard.inheritAttrs = false;
export default OrganizationFilledStandard;