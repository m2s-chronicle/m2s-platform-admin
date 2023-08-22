import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import formatter from '@/utils/formatter';

interface IProps {
  mydataData: {
    id: number;
    created_date: string;
    checkup_year: string;
    checkup_date: string;
    checkup_place: string;
    height: string;
    weight: string;
    waist: string;
    bmi: string;
    sight: string;
    hearing: string;
    blood_pressure: string;
    urinary_protein: string;
    hemoglobin: string;
    fasting_blood_sugar: string;
    total_cholesterol: string;
    hdl_cholesterol: string;
    triglyceride: string;
    ldl_cholesterol: string;
    serum_creatinine: string;
    gfr: string;
    ast: string;
    alt: string;
    ygpt: string;
    tb_chest_disease: string;
    osteoporosis: string;
    judgement: string;
  }[];
}

const columns = [
  { id: 'id', label: 'No.', minWidth: 40 },
  { id: 'created_date', label: '일시' },
  { id: 'checkup_year', label: '검진년도' },
  { id: 'checkup_date', label: '검진일자' },
  { id: 'checkup_place', label: '검진장소' },
  { id: 'height', label: '키 (cm)' },
  { id: 'weight', label: '몸무게 (kg)' },
  { id: 'waist', label: '허리둘레 (cm)' },
  { id: 'bmi', label: 'BMI (kg/m2)' },
  { id: 'sight', label: '시력' },
  { id: 'hearing', label: '청력' },
  { id: 'blood_pressure', label: '혈압 (mmHg)' },
  { id: 'urinary_protein', label: '요단백' },
  { id: 'hemoglobin', label: '헤모글로빈 (g/dL)' },
  { id: 'fasting_blood_sugar', label: '공복혈당 (mg/dL)' },
  { id: 'total_cholesterol', label: '총 콜레스테롤 (mg/dL)' },
  { id: 'hdl_cholesterol', label: 'HDL 콜레스테롤 (mg/dL)' },
  { id: 'triglyceride', label: '트리글리세라이드 (mg/dL)' },
  { id: 'ldl_cholesterol', label: 'LDL 콜레스테롤 (mg/dL)' },
  { id: 'serum_creatinine', label: '혈중 크레아티닌 (mg/dL)' },
  { id: 'gfr', label: 'GFR (mL/min)' },
  { id: 'ast', label: 'AST (U/L)' },
  { id: 'alt', label: 'ALT (U/L)' },
  { id: 'ygpt', label: 'YGPT (U/L)' },
  { id: 'tb_chest_disease', label: '흉부질환 여부' },
  { id: 'osteoporosis', label: '골다공증 여부' },
  { id: 'judgement', label: '판정 결과' },
];

const MydataTable = (props: IProps) => {
  const { mydataData } = props;
  return (
    <>
      <TableContainer sx={{ px: 4 }} component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              {columns.map((col) => (
                <TableCell key={col.id} style={{ minWidth: col.minWidth, whiteSpace: 'nowrap' }}>
                  {col.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {mydataData.map((row) => (
              <TableRow hover tabIndex={-1} key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{formatter.isoToDateTime(row.created_date)}</TableCell>
                <TableCell>{row.checkup_year}</TableCell>
                <TableCell>{row.checkup_date}</TableCell>
                <TableCell>{row.checkup_place}</TableCell>
                <TableCell>{row.height}</TableCell>
                <TableCell>{row.weight}</TableCell>
                <TableCell>{row.waist}</TableCell>
                <TableCell>{row.bmi}</TableCell>
                <TableCell>{row.sight}</TableCell>
                <TableCell>{row.hearing}</TableCell>
                <TableCell>{row.blood_pressure}</TableCell>
                <TableCell>{row.urinary_protein}</TableCell>
                <TableCell>{row.hemoglobin}</TableCell>
                <TableCell>{row.fasting_blood_sugar}</TableCell>
                <TableCell>{row.total_cholesterol}</TableCell>
                <TableCell>{row.hdl_cholesterol}</TableCell>
                <TableCell>{row.triglyceride}</TableCell>
                <TableCell>{row.ldl_cholesterol}</TableCell>
                <TableCell>{row.serum_creatinine}</TableCell>
                <TableCell>{row.gfr}</TableCell>
                <TableCell>{row.ast}</TableCell>
                <TableCell>{row.alt}</TableCell>
                <TableCell>{row.ygpt}</TableCell>
                <TableCell>{row.tb_chest_disease}</TableCell>
                <TableCell>{row.osteoporosis}</TableCell>
                <TableCell>{row.judgement}</TableCell>

                {/* ... other cells ... */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MydataTable;
