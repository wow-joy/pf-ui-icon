// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NotFoundTwoToneSvg from '@pf-ui/pf-icon-svg/es/asn/NotFoundTwoTone';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface NotFoundTwoToneIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const NotFoundTwoTone: NotFoundTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={NotFoundTwoToneSvg}></PfIcon>;
};

NotFoundTwoTone.displayName = 'NotFoundTwoTone';
NotFoundTwoTone.inheritAttrs = false;
export default NotFoundTwoTone;