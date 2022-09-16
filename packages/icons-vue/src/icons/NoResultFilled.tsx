// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NoResultFilledSvg from 'pf-icon-svg/es/asn/NoResultFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface NoResultFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const NoResultFilled: NoResultFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={NoResultFilledSvg}></PfIcon>;
};

NoResultFilled.displayName = 'NoResultFilled';
NoResultFilled.inheritAttrs = false;
export default NoResultFilled;