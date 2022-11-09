// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Edit2FilledSvg from '@pf-ui/pf-icon-svg/es/asn/Edit2Filled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface Edit2FilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const Edit2Filled: Edit2FilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={Edit2FilledSvg}></PfIcon>;
};

Edit2Filled.displayName = 'Edit2Filled';
Edit2Filled.inheritAttrs = false;
export default Edit2Filled;