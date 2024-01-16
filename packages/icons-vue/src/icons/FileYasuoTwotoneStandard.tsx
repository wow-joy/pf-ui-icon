// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FileYasuoTwotoneStandardSvg from '@pf-ui/pf-icon-svg/es/asn/FileYasuoTwotoneStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface FileYasuoTwotoneStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const FileYasuoTwotoneStandard: FileYasuoTwotoneStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={FileYasuoTwotoneStandardSvg}></PfIcon>;
};

FileYasuoTwotoneStandard.displayName = 'FileYasuoTwotoneStandard';
FileYasuoTwotoneStandard.inheritAttrs = false;
export default FileYasuoTwotoneStandard;