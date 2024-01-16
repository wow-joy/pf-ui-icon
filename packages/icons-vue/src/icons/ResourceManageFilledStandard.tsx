// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ResourceManageFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/ResourceManageFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface ResourceManageFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const ResourceManageFilledStandard: ResourceManageFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={ResourceManageFilledStandardSvg}></PfIcon>;
};

ResourceManageFilledStandard.displayName = 'ResourceManageFilledStandard';
ResourceManageFilledStandard.inheritAttrs = false;
export default ResourceManageFilledStandard;