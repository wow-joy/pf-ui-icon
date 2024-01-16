// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FileTxtTwotoneStandardSvg from '@pf-ui/pf-icon-svg/es/asn/FileTxtTwotoneStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface FileTxtTwotoneStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const FileTxtTwotoneStandard: FileTxtTwotoneStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={FileTxtTwotoneStandardSvg}></PfIcon>;
};

FileTxtTwotoneStandard.displayName = 'FileTxtTwotoneStandard';
FileTxtTwotoneStandard.inheritAttrs = false;
export default FileTxtTwotoneStandard;