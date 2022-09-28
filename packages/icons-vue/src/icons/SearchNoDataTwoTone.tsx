// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchNoDataTwoToneSvg from '@pf-ui/pf-icon-svg/es/asn/SearchNoDataTwoTone';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface SearchNoDataTwoToneIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const SearchNoDataTwoTone: SearchNoDataTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={SearchNoDataTwoToneSvg}></PfIcon>;
};

SearchNoDataTwoTone.displayName = 'SearchNoDataTwoTone';
SearchNoDataTwoTone.inheritAttrs = false;
export default SearchNoDataTwoTone;