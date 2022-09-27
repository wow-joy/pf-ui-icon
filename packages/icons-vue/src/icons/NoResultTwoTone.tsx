// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NoResultTwoToneSvg from 'pf-icon-svg/es/asn/NoResultTwoTone';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface NoResultTwoToneIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const NoResultTwoTone: NoResultTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={NoResultTwoToneSvg}></PfIcon>;
};

NoResultTwoTone.displayName = 'NoResultTwoTone';
NoResultTwoTone.inheritAttrs = false;
export default NoResultTwoTone;