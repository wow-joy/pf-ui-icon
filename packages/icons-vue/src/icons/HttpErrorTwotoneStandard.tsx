// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HttpErrorTwotoneStandardSvg from '@pf-ui/pf-icon-svg/es/asn/HttpErrorTwotoneStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface HttpErrorTwotoneStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const HttpErrorTwotoneStandard: HttpErrorTwotoneStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={HttpErrorTwotoneStandardSvg}></PfIcon>;
};

HttpErrorTwotoneStandard.displayName = 'HttpErrorTwotoneStandard';
HttpErrorTwotoneStandard.inheritAttrs = false;
export default HttpErrorTwotoneStandard;