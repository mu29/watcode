import * as v from '.'

test('email', () => {
  expect(v.email('invalid')).toBe('올바른 메일 주소 형식이 아닙니다.')
  expect(v.email('invalid@invalid')).toBe('올바른 메일 주소 형식이 아닙니다.')
  expect(v.email('valid@valid.com')).toBe(false)
})

test('required', () => {
  expect(v.required('')).toBe('이 칸을 채워주세요.')
  expect(v.required(null)).toBe('이 칸을 채워주세요.')
  expect(v.required(undefined)).toBe('이 칸을 채워주세요.')
  expect(v.required('valid')).toBe(false)
})

test('minLength', () => {
  expect(v.minLength(5)('1234')).toBe('길이가 너무 짧습니다. (최소 5자)')
  expect(v.minLength(5)('12345')).toBe(false)
})

test('maxLength', () => {
  expect(v.maxLength(5)('123456')).toBe('길이가 너무 깁니다. (최대 5자)')
  expect(v.maxLength(5)('12345')).toBe(false)
})

test('integer', () => {
  expect(v.integer('invalid')).toBe('숫자만 입력할 수 있습니다.')
  expect(v.integer('2.3')).toBe('숫자만 입력할 수 있습니다.')
  expect(v.integer('.5')).toBe('숫자만 입력할 수 있습니다.')
  expect(v.integer('1')).toBe(false)
})

test('createValidator', () => {
  const validator = v.createValidator({
    email: [v.required, v.email],
    password: [v.required, v.minLength(6)],
  })

  expect(typeof validator).toBe('function')

  expect(validator({
    email: '',
    password: '',
  })).toEqual({
    email: v.required(''),
    password: v.required(''),
  }, 'Expected to follow the validation order')

  expect(Object.keys(validator({
    email: 'invalid',
    password: '12345',
  }))).toEqual(['email', 'password'])

  expect(Object.keys(validator({
    email: 'test@example.com',
    password: '12345',
  }))).toEqual(['password'])

  expect(validator({
    email: 'test@example.com',
    password: '123456',
  })).toEqual({})

  expect(validator()).toEqual({
    email: v.required(''),
    password: v.required(''),
  })
})
