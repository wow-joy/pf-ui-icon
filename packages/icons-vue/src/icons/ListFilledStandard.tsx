// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ListFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/ListFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface ListFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const ListFilledStandard: ListFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={ListFilledStandardSvg}></PfIcon>;
};

ListFilledStandard.displayName = 'ListFilledStandard';
ListFilledStandard.inheritAttrs = false;
export default ListFilledStandard;