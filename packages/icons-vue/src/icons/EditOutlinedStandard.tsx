// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EditOutlinedStandardSvg from '@pf-ui/pf-icon-svg/es/asn/EditOutlinedStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface EditOutlinedStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const EditOutlinedStandard: EditOutlinedStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={EditOutlinedStandardSvg}></PfIcon>;
};

EditOutlinedStandard.displayName = 'EditOutlinedStandard';
EditOutlinedStandard.inheritAttrs = false;
export default EditOutlinedStandard;