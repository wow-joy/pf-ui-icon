// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EditFilledSvg from 'pf-icon-svg/es/asn/EditFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface EditFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const EditFilled: EditFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={EditFilledSvg}></PfIcon>;
};

EditFilled.displayName = 'EditFilled';
EditFilled.inheritAttrs = false;
export default EditFilled;