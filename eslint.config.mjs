// Next.js 15 flat config via FlatCompat.
// (Previous config used Next 16 template imports and crashed on every run.)
import { dirname }       from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat }    from '@eslint/eslintrc'

const compat = new FlatCompat({ baseDirectory: dirname(fileURLToPath(import.meta.url)) })

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  { ignores: ['.next/**', 'out/**', 'build/**', 'next-env.d.ts'] },
]

export default eslintConfig
