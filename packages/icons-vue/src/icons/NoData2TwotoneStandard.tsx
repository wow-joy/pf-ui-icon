// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NoData2TwotoneStandardSvg from '@pf-ui/pf-icon-svg/es/asn/NoData2TwotoneStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface NoData2TwotoneStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const NoData2TwotoneStandard: NoData2TwotoneStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={NoData2TwotoneStandardSvg}></PfIcon>;
};

NoData2TwotoneStandard.displayName = 'NoData2TwotoneStandard';
NoData2TwotoneStandard.inheritAttrs = false;
export default NoData2TwotoneStandard;