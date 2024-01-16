// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FileExcelTwotoneStandardSvg from '@pf-ui/pf-icon-svg/es/asn/FileExcelTwotoneStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface FileExcelTwotoneStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const FileExcelTwotoneStandard: FileExcelTwotoneStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={FileExcelTwotoneStandardSvg}></PfIcon>;
};

FileExcelTwotoneStandard.displayName = 'FileExcelTwotoneStandard';
FileExcelTwotoneStandard.inheritAttrs = false;
export default FileExcelTwotoneStandard;