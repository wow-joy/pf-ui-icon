// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NotAuthorizedTwotoneStandardSvg from '@pf-ui/pf-icon-svg/es/asn/NotAuthorizedTwotoneStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface NotAuthorizedTwotoneStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const NotAuthorizedTwotoneStandard: NotAuthorizedTwotoneStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={NotAuthorizedTwotoneStandardSvg}></PfIcon>;
};

NotAuthorizedTwotoneStandard.displayName = 'NotAuthorizedTwotoneStandard';
NotAuthorizedTwotoneStandard.inheritAttrs = false;
export default NotAuthorizedTwotoneStandard;