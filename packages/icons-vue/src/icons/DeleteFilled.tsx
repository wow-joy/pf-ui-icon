// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DeleteFilledSvg from 'pf-icon-svg/es/asn/DeleteFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface DeleteFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const DeleteFilled: DeleteFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={DeleteFilledSvg}></PfIcon>;
};

DeleteFilled.displayName = 'DeleteFilled';
DeleteFilled.inheritAttrs = false;
export default DeleteFilled;