// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NotFoundFilledSvg from 'pf-icon-svg/es/asn/NotFoundFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface NotFoundFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const NotFoundFilled: NotFoundFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={NotFoundFilledSvg}></PfIcon>;
};

NotFoundFilled.displayName = 'NotFoundFilled';
NotFoundFilled.inheritAttrs = false;
export default NotFoundFilled;