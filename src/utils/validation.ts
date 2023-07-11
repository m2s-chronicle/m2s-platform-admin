export const emailValid = {
  required: '이메일을 입력해주세요.',
  pattern: {
    value: /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
    message: '올바른 이메일 형식을 입력해주세요.',
  },
};

export const passwordValid = {
  required: '비밀번호를 입력해주세요.',
  pattern: {
    value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,14}$/,
    message: '비밀번호는 6~14자리의 영문,숫자,특수기호를 포함해야합니다.',
  },
};
