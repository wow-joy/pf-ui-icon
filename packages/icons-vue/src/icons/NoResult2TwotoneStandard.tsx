// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NoResult2TwotoneStandardSvg from '@pf-ui/pf-icon-svg/es/asn/NoResult2TwotoneStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface NoResult2TwotoneStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const NoResult2TwotoneStandard: NoResult2TwotoneStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={NoResult2TwotoneStandardSvg}></PfIcon>;
};

NoResult2TwotoneStandard.displayName = 'NoResult2TwotoneStandard';
NoResult2TwotoneStandard.inheritAttrs = false;
export default NoResult2TwotoneStandard;