const isEmpty = value => value === undefined || value === null || value === ''

const isEmail = value => /.+@.+\..+/.test(value.toLowerCase())

const isInt = value => /\d+/.test(value)

const join = rules => (value, data) =>
  rules.map(rule => rule(value, data)).filter(error => !!error)[0]

export const email = value => !isEmpty(value) && !isEmail(value) &&
  '올바른 메일 주소 형식이 아닙니다.'

export const required = value => isEmpty(value) &&
  '이 칸을 채워주세요.'

export const minLength = min => value => !isEmpty(value) && value.length < min &&
  `길이가 너무 짧습니다. (최소 ${min}자)`

export const maxLength = max => value => !isEmpty(value) && value.length > max &&
  `길이가 너무 깁니다. (최대 ${max}자)`

export const integer = value => !isInt(value) &&
  '숫자만 입력할 수 있습니다.'

export const createValidator = rules => (data = {}) => {
  const errors = {}
  Object.keys(rules).forEach((key) => {
    const rule = join([].concat(rules[key]))
    const error = rule(data[key], data)
    if (error) {
      errors[key] = error
    }
  })
  return errors
}
