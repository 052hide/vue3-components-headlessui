import type { TransitionClassNames } from '~/types/transition'
import type { Props as SelectOptionProps } from './SelectOption/type'

export type Item<T extends number | string | null = number | string | null> =
  SelectOptionProps<T> & {
    key: string
  }

export type Props<T extends number | string | null = number | string | null> = {
  value: T | null
  classNames?: {
    base?: string
  }
  button?: {
    classNames?: {
      base?: string
    }
  }
  itemsWrapperTransition?: {
    classNames?: TransitionClassNames
  }
  itemsWrapper?: {
    classNames?: {
      base?: string
    }
  }
  items: Item[]
}
