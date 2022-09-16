// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchNoDataFilledSvg from 'pf-icon-svg/es/asn/SearchNoDataFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface SearchNoDataFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const SearchNoDataFilled: SearchNoDataFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={SearchNoDataFilledSvg}></PfIcon>;
};

SearchNoDataFilled.displayName = 'SearchNoDataFilled';
SearchNoDataFilled.inheritAttrs = false;
export default SearchNoDataFilled;