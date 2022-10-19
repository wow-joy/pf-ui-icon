// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import IdcardTwoToneSvg from '@pf-ui/pf-icon-svg/es/asn/IdcardTwoTone';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface IdcardTwoToneIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const IdcardTwoTone: IdcardTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={IdcardTwoToneSvg}></PfIcon>;
};

IdcardTwoTone.displayName = 'IdcardTwoTone';
IdcardTwoTone.inheritAttrs = false;
export default IdcardTwoTone;