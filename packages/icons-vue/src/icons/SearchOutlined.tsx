// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchOutlinedSvg from '@pf-ui/pf-icon-svg/es/asn/SearchOutlined';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface SearchOutlinedIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const SearchOutlined: SearchOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={SearchOutlinedSvg}></PfIcon>;
};

SearchOutlined.displayName = 'SearchOutlined';
SearchOutlined.inheritAttrs = false;
export default SearchOutlined;