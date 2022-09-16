// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AddFilledSvg from 'pf-icon-svg/es/asn/AddFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface AddFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const AddFilled: AddFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={AddFilledSvg}></PfIcon>;
};

AddFilled.displayName = 'AddFilled';
AddFilled.inheritAttrs = false;
export default AddFilled;