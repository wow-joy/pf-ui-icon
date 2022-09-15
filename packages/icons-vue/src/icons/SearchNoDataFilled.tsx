// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchNoDataFilledSvg from 'pf-icon-svg/es/asn/SearchNoDataFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchNoDataFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchNoDataFilled: SearchNoDataFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchNoDataFilledSvg}></AntdIcon>;
};

SearchNoDataFilled.displayName = 'SearchNoDataFilled';
SearchNoDataFilled.inheritAttrs = false;
export default SearchNoDataFilled;