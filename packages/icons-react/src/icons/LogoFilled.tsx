// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import LogoFilledSvg from '@pf-ui/pf-icon-svg/es/asn/LogoFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LogoFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LogoFilledSvg} />;

LogoFilled.displayName = 'LogoFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LogoFilled);