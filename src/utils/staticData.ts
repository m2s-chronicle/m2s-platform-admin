interface StatusColor {
  color: string;
}

interface StatusColorMap {
  [key: string]: StatusColor;
}

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

export const AUTH_STATUS = [
  { value: 'finish', label: '본인인증 완료' },
];

export const HEALTH_CHECK_STATUS = [
  { value: '정A', label: '정상A', default: true },
  { value: '정B', label: '정상B' },
  { value: '질환의심', label: '일반 질환의심' },
];

export const SEARCH_DATE_TYPE = [
  { value: 'create', label: '가입일' },
  { value: 'recent', label: '최근접속일시' },
];

export const MEMBER_COLUMNS = [
  { value: 'name', label: '이름' },
  { value: 'username', label: '아이디' },
  { value: 'phone', label: '전화번호' },
  { value: 'birth', label: '생년월일' },
  { value: 'created_date', label: '가입날짜' },
  { value: 'recent_date', label: '최근접속일시' },
  { value: 'status', label: '회원상태' },
];

export const MYDATA_COLUMNS = [
  { value: 'name', label: '이름' },
  { value: 'birth', label: '생년월일' },
  { value: 'checkup_date', label: '검사날찌' },
  { value: 'checkup_place', label: '검사 장소' },
  { value: 'judgement', label: '판정 결과' },
  { value: 'height', label: '키 (cm)' },
  { value: 'weight', label: '몸무게 (kg)' },
  { value: 'waist', label: '허리둘레 (cm)' },
  { value: 'bmi', label: 'BMI (kg/m2)' },
  { value: 'sight', label: '시력' },
  { value: 'hearing', label: '청력' },
  { value: 'blood_pressure', label: '혈압 (mmHg)' },
  { value: 'urinary_protein', label: '요단백' },
  { value: 'hemoglobin', label: '헤모글로빈 (g/dL)' },
  { value: 'fasting_blood_sugar', label: '공복혈당 (mg/dL)' },
  { value: 'total_cholesterol', label: '총 콜레스테롤 (mg/dL)' },
  { value: 'hdl_cholesterol', label: 'HDL 콜레스테롤 (mg/dL)' },
  { value: 'triglyceride', label: '트리글리세라이드 (mg/dL)' },
  { value: 'ldl_cholesterol', label: 'LDL 콜레스테롤 (mg/dL)' },
  { value: 'serum_creatinine', label: '혈중 크레아티닌 (mg/dL)' },
  { value: 'gfr', label: 'GFR (mL/min)' },
  { value: 'ast', label: 'AST (U/L)' },
  { value: 'alt', label: 'ALT (U/L)' },
  { value: 'ygpt', label: 'YGPT (U/L)' },
  { value: 'tb_chest_disease', label: '흉부질환 여부' },
  { value: 'osteoporosis', label: '골다공증 여부' },
  { value: 'created_date', label: '연동 날짜' },
];


export const USER_STATUS_COLOR: StatusColorMap= {
  pending: { color: 'warning' },
  out: { color: 'secondary' },
  active: { color: 'success' },
};

export const AUTH_STATUS_COLOR: StatusColorMap = {
  finish: { color: 'success' },
};

export const HEALTH_CHECK_STATUS_COLOR: StatusColorMap = {
  '정A': { color: 'success' },
  '정B': { color: 'info' },
  '질환의심': { color: 'warning' },
};