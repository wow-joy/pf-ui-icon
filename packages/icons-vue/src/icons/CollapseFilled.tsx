// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CollapseFilledSvg from '@pf-ui/pf-icon-svg/es/asn/CollapseFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface CollapseFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const CollapseFilled: CollapseFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={CollapseFilledSvg}></PfIcon>;
};

CollapseFilled.displayName = 'CollapseFilled';
CollapseFilled.inheritAttrs = false;
export default CollapseFilled;