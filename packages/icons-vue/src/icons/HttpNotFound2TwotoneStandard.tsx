// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HttpNotFound2TwotoneStandardSvg from '@pf-ui/pf-icon-svg/es/asn/HttpNotFound2TwotoneStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface HttpNotFound2TwotoneStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const HttpNotFound2TwotoneStandard: HttpNotFound2TwotoneStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={HttpNotFound2TwotoneStandardSvg}></PfIcon>;
};

HttpNotFound2TwotoneStandard.displayName = 'HttpNotFound2TwotoneStandard';
HttpNotFound2TwotoneStandard.inheritAttrs = false;
export default HttpNotFound2TwotoneStandard;