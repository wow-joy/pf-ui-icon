// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FileJpegTwotoneStandardSvg from '@pf-ui/pf-icon-svg/es/asn/FileJpegTwotoneStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface FileJpegTwotoneStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const FileJpegTwotoneStandard: FileJpegTwotoneStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={FileJpegTwotoneStandardSvg}></PfIcon>;
};

FileJpegTwotoneStandard.displayName = 'FileJpegTwotoneStandard';
FileJpegTwotoneStandard.inheritAttrs = false;
export default FileJpegTwotoneStandard;