// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DeleteTwoToneSvg from '@pf-ui/pf-icon-svg/es/asn/DeleteTwoTone';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface DeleteTwoToneIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const DeleteTwoTone: DeleteTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={DeleteTwoToneSvg}></PfIcon>;
};

DeleteTwoTone.displayName = 'DeleteTwoTone';
DeleteTwoTone.inheritAttrs = false;
export default DeleteTwoTone;