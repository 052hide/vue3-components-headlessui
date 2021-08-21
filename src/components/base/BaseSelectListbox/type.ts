import type { OmitClassNames } from '~/types/common'
import type { Props as HeadlessSelectListboxProps } from '~/components/headless/HeadlessSelectListbox/type'

export type Props = OmitClassNames<HeadlessSelectListboxProps> & {
  block: boolean
}
