export type TMember = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  birth: string;
  gender: 'F' | 'M';
  created_date: string;
  recent_date: string;
  status: 'pending' | 'active' | 'out';
};

export type TPage = {
  is_first_page: boolean;
  is_last_page: true;
  request_page: number;
  request_size: number;
  total_data_cnt: number;
  total_pages: number;
};

type TDateRange = {
  startDate?: null | Date;
  endDate?: null | Date;
};

export interface TSearch {
  keyword?: string; // 검색어
  keywordType?: string; // 검색어 조건
  status?: string; // 회원상태
  dateType?: string; // 기간 타입
  searchDate?: TDateRange; // 날짜범위
  startDate?: null | Date; // 시작날짜
  endDate?: null | Date; // 종료날짜
}

export interface TMemSearch extends TSearch {
  status?: 'pending' | 'active' | 'out';
}

export interface ITableColumn {
  id: string;
  label: string;
  minWidth?: number;
  align?: 'left';
  format?: (value: number) => string;
}

interface keyOption {
  [key: string]: string | number;
}

export interface IMemberActiveData extends keyOption {
  id: string;
  regDt: string;
  activeType: string;
  activeDesc: string;
  principal: string;
}
