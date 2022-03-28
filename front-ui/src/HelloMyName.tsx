import { memo, useMemo } from 'react'

export function getUppercaseName(name: string) {
  const first = name[0].toUpperCase()
  let result = first
  for (let i = 1; i < name.length; i += 1) {
    result += name[i]
  }
  return result
}

type HelloMyNameProps = {
  name?: string
}

function HelloMyName({ name = 'nobody' }: HelloMyNameProps) {
  const userName = useMemo(() => getUppercaseName(name), [name])
  return (
    <p>
      Hello! <strong>{userName}</strong>
    </p>
  )
}

export default memo(HelloMyName)
