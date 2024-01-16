// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchOutlinedStandardSvg from '@pf-ui/pf-icon-svg/es/asn/SearchOutlinedStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface SearchOutlinedStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const SearchOutlinedStandard: SearchOutlinedStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={SearchOutlinedStandardSvg}></PfIcon>;
};

SearchOutlinedStandard.displayName = 'SearchOutlinedStandard';
SearchOutlinedStandard.inheritAttrs = false;
export default SearchOutlinedStandard;