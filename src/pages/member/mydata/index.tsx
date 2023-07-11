import React from 'react';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

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
    <div>
      <h4>엑셀다운로드테스트 - 귀찮아....</h4>
      <button onClick={handleDownloadExcel}>엑셀받아라버튼</button>
    </div>
  );
};

export default MydataPage;
