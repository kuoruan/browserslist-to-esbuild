import browserslist from 'browserslist'

declare function browserslistToEsbuild(
  browserslistConfig?: string | readonly string[],
  options?: browserslist.Options
): string[]

declare function browserslistToEsbuild(
  options?: browserslist.Options
): string[]

export default browserslistToEsbuild
