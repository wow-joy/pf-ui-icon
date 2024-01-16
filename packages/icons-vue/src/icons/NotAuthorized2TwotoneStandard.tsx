// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NotAuthorized2TwotoneStandardSvg from '@pf-ui/pf-icon-svg/es/asn/NotAuthorized2TwotoneStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface NotAuthorized2TwotoneStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const NotAuthorized2TwotoneStandard: NotAuthorized2TwotoneStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={NotAuthorized2TwotoneStandardSvg}></PfIcon>;
};

NotAuthorized2TwotoneStandard.displayName = 'NotAuthorized2TwotoneStandard';
NotAuthorized2TwotoneStandard.inheritAttrs = false;
export default NotAuthorized2TwotoneStandard;