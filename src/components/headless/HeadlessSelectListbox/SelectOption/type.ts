export type Props<T extends number | string | null = number | string | null> = {
  value: T | null
  label: string
  disabled: boolean
  classNames?: {
    base?: string
    selected?: string
    active?: string
    disabled?: string
  }
}
