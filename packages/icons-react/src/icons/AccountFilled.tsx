// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AccountFilledSvg from '@pf-ui/pf-icon-svg/es/asn/AccountFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AccountFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AccountFilledSvg} />;

AccountFilled.displayName = 'AccountFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AccountFilled);