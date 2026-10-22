import type { FieldHook } from 'payload'

/** "Halo, Dunia!" → "halo-dunia" */
export const toSlug = (value: string) =>
  value
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/[\s-]+/g, '-')
    .replace(/^-+|-+$/g, '')

/**
 * Fills the slug from another field when the editor leaves it empty, and
 * normalises whatever they typed otherwise.
 */
export const slugFrom =
  (sourceField: string): FieldHook =>
  ({ value, data }) => {
    if (typeof value === 'string' && value.trim()) return toSlug(value)
    const source = data?.[sourceField]
    return typeof source === 'string' ? toSlug(source) : value
  }
