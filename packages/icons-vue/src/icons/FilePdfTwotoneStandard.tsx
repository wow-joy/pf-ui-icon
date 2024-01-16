// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FilePdfTwotoneStandardSvg from '@pf-ui/pf-icon-svg/es/asn/FilePdfTwotoneStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface FilePdfTwotoneStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const FilePdfTwotoneStandard: FilePdfTwotoneStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={FilePdfTwotoneStandardSvg}></PfIcon>;
};

FilePdfTwotoneStandard.displayName = 'FilePdfTwotoneStandard';
FilePdfTwotoneStandard.inheritAttrs = false;
export default FilePdfTwotoneStandard;