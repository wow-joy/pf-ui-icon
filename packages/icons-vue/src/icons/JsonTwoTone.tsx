// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import JsonTwoToneSvg from '@pf-ui/pf-icon-svg/es/asn/JsonTwoTone';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface JsonTwoToneIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const JsonTwoTone: JsonTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={JsonTwoToneSvg}></PfIcon>;
};

JsonTwoTone.displayName = 'JsonTwoTone';
JsonTwoTone.inheritAttrs = false;
export default JsonTwoTone;