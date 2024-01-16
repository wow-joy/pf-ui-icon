// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HttpError2TwotoneStandardSvg from '@pf-ui/pf-icon-svg/es/asn/HttpError2TwotoneStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface HttpError2TwotoneStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const HttpError2TwotoneStandard: HttpError2TwotoneStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={HttpError2TwotoneStandardSvg}></PfIcon>;
};

HttpError2TwotoneStandard.displayName = 'HttpError2TwotoneStandard';
HttpError2TwotoneStandard.inheritAttrs = false;
export default HttpError2TwotoneStandard;