// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NoDataTwotoneStandardSvg from '@pf-ui/pf-icon-svg/es/asn/NoDataTwotoneStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface NoDataTwotoneStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const NoDataTwotoneStandard: NoDataTwotoneStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={NoDataTwotoneStandardSvg}></PfIcon>;
};

NoDataTwotoneStandard.displayName = 'NoDataTwotoneStandard';
NoDataTwotoneStandard.inheritAttrs = false;
export default NoDataTwotoneStandard;