// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NoResultTwotoneStandardSvg from '@pf-ui/pf-icon-svg/es/asn/NoResultTwotoneStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface NoResultTwotoneStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const NoResultTwotoneStandard: NoResultTwotoneStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={NoResultTwotoneStandardSvg}></PfIcon>;
};

NoResultTwotoneStandard.displayName = 'NoResultTwotoneStandard';
NoResultTwotoneStandard.inheritAttrs = false;
export default NoResultTwotoneStandard;