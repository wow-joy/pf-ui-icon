// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchSquareFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/SearchSquareFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface SearchSquareFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const SearchSquareFilledStandard: SearchSquareFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={SearchSquareFilledStandardSvg}></PfIcon>;
};

SearchSquareFilledStandard.displayName = 'SearchSquareFilledStandard';
SearchSquareFilledStandard.inheritAttrs = false;
export default SearchSquareFilledStandard;