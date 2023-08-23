import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

//* MUI Import
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

//* Features
import ListTable from '@/features/member/mydata/ListTable';

//* Components
import ContentTitle from '@/components/contentTitle';

//* Hooks
import useMydataList from '@/hooks/queries/useMydataList';

interface SheetProtectionOptions {
  sheet: string;
  password: string;
  formatCells?: boolean;
  formatColumns?: boolean;
  formatRows?: boolean;
  insertColumns?: boolean;
  insertRows?: boolean;
  deleteColumns?: boolean;
  deleteRows?: boolean;
  autoFilter?: boolean;
  sort?: boolean;
  // 다른 원하는 옵션을 추가할 수 있습니다.
}

const MydataPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { isLoading, data } = useMydataList(currentPage, rowsPerPage);
  console.log("data", data)

  // 페이지 변경
  const handleChangePage = async (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setCurrentPage(newPage);
  };

  // 페이지당 행 변경
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(1);
  };

  const handleDownloadExcel = () => {
    // 임시 데이터 예시
    const data = [
      { Name: 'John Doe', Age: 30 },
      { Name: 'Jane Smith', Age: 25 },
    ];

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    const sheetProtectionOptions: SheetProtectionOptions = {
      sheet: 'Sheet1',
      password: 'myPassword',
      formatCells: true,
      formatColumns: false,
      formatRows: false,
      insertColumns: false,
      insertRows: false,
      deleteColumns: false,
      deleteRows: false,
      autoFilter: false,
      sort: false,
      // 다른 원하는 옵션을 추가할 수 있습니다.
    };

    const sheet = workbook.Sheets[sheetProtectionOptions.sheet];

    console.log(sheet);
    sheet['!protect'] = {
      password: sheetProtectionOptions.password,
      // 기타 옵션들을 잠금 설정에 추가할 수 있습니다.
    };

    const excelBuffer = XLSX.write(workbook, {
      type: 'array',
      bookType: 'xlsx',
      sheetProtection: sheetProtectionOptions,
    } as XLSX.WritingOptions);

    const excelBlob = new Blob([excelBuffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });

    const fileName = 'example.xlsx';

    saveAs(excelBlob, fileName);
  };


  return (
    // <div>
    //   <h4>엑셀다운로드테스트 - 귀찮아....</h4>
    //   <button onClick={handleDownloadExcel}>엑셀받아라버튼</button>
    // </div>
    <>
      <ContentTitle title="마이데이터" isBreadcrumbs />
      <Card>
        <CardContent sx={{ p: 0 }}>
          <Box sx={{ px: 4, py: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="body2">전체 회원수: {data?.page.total_data_cnt}</Typography>
            <Button color="success" size="small" variant="outlined" startIcon={<FileDownloadIcon />}>
              Excel
            </Button>
          </Box>
          {data ? (
            <ListTable
              rows={data.mydata_list}
              pageInfo={data.page}
              isLoading={false}
              handleChangePage={handleChangePage}
              handleChangeRowsPerPage={handleChangeRowsPerPage}
            />
          ) : (
            <div>Loading...</div>
          )}
        </CardContent>
      </Card>
    </>
  );
};

export default MydataPage;
