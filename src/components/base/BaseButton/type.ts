import type { OmitClassNames } from '~/types/common'
import type { Props as HeadlessButtonProps } from '~/components/headless/HeadlessButton/type'

export type Props = OmitClassNames<HeadlessButtonProps> & {
  block: boolean
  loading: boolean
  theme: 'primary' | 'secondary'
  size: 'xs' | 'sm' | 'base' | 'lg' | 'xl'
}
