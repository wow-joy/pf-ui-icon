// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FilePngTwotoneStandardSvg from '@pf-ui/pf-icon-svg/es/asn/FilePngTwotoneStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface FilePngTwotoneStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const FilePngTwotoneStandard: FilePngTwotoneStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={FilePngTwotoneStandardSvg}></PfIcon>;
};

FilePngTwotoneStandard.displayName = 'FilePngTwotoneStandard';
FilePngTwotoneStandard.inheritAttrs = false;
export default FilePngTwotoneStandard;