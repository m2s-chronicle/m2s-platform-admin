export const SEARCH_TYPE = [
  { value: 'all', label: '전체' },
  { value: 'name', label: '이름' },
  { value: 'email', label: '이메일' },
];

export const MEMEBER_STATUS = [
  { value: 'all', label: '전체', default: true },
  { value: 'active', label: '정상' },
  { value: 'pending', label: '휴면' },
  { value: 'out', label: '탈퇴' },
];

export const SEARCH_DATE_TYPE = [
  { value: 'create', label: '가입일' },
  { value: 'recent', label: '최근접속일시' },
];

export const MEMBER_COLUMNS = [
  { value: 'name', label: '이름' },
  { value: 'userId', label: '아이디' },
  { value: 'phone', label: '전화번호' },
  { value: 'birth', label: '생년월일' },
  { value: 'createDt', label: '가입날짜' },
  { value: 'recentDt', label: '최근접속일시' },
  { value: 'status', label: '회원상태' },
];
