// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HttpNotFoundTwotoneStandardSvg from '@pf-ui/pf-icon-svg/es/asn/HttpNotFoundTwotoneStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface HttpNotFoundTwotoneStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const HttpNotFoundTwotoneStandard: HttpNotFoundTwotoneStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={HttpNotFoundTwotoneStandardSvg}></PfIcon>;
};

HttpNotFoundTwotoneStandard.displayName = 'HttpNotFoundTwotoneStandard';
HttpNotFoundTwotoneStandard.inheritAttrs = false;
export default HttpNotFoundTwotoneStandard;