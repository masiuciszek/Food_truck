export const checkLength = <T>(input: string | Array<T>) => (
  len = 1
): boolean => {
  return input.length > len
}

export const generateNameSlug = (firstName: string, lastName: string) => {
  const first3 = checkLength(firstName)(3) ? firstName.slice(0, 3) : firstName
  const last3 = checkLength(lastName)(3) ? lastName.slice(0, 3) : lastName
  return `${first3}-${last3}`
}
