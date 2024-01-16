// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FileHtmlTwotoneStandardSvg from '@pf-ui/pf-icon-svg/es/asn/FileHtmlTwotoneStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface FileHtmlTwotoneStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const FileHtmlTwotoneStandard: FileHtmlTwotoneStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={FileHtmlTwotoneStandardSvg}></PfIcon>;
};

FileHtmlTwotoneStandard.displayName = 'FileHtmlTwotoneStandard';
FileHtmlTwotoneStandard.inheritAttrs = false;
export default FileHtmlTwotoneStandard;