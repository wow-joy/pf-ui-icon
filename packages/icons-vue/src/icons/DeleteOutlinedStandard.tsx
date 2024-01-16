// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DeleteOutlinedStandardSvg from '@pf-ui/pf-icon-svg/es/asn/DeleteOutlinedStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface DeleteOutlinedStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const DeleteOutlinedStandard: DeleteOutlinedStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={DeleteOutlinedStandardSvg}></PfIcon>;
};

DeleteOutlinedStandard.displayName = 'DeleteOutlinedStandard';
DeleteOutlinedStandard.inheritAttrs = false;
export default DeleteOutlinedStandard;