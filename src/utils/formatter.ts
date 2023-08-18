const formatter = {
  /**
  * Null체크
  * @param str
  * @returns
  */
  checkNull: function (str: string) {
    if (typeof str == 'undefined' || str == null || str == '') {
      return true;
    } else {
      return false;
    }
  },
  /**
  * 날짜 포맷터
  * @param date
  * @returns 19981026 -> 1998-10-26
  */
  date: function (inputDate: string): string {
    if (this.checkNull(inputDate)) {
      return inputDate;
    } else {
      const year = inputDate.slice(0, 4);
      const month = inputDate.slice(4, 6);
      const day = inputDate.slice(6, 8);
      return `${year}-${month}-${day}`;
    }
  },
  /**
  * iso8601 날짜를 YYYY-MM-DD로 바꿔주는 포맷터
  * @param date
  * @returns 2023-08-08T23:29:12.686855Z -> 2023-08-08
  */
  isoToDate: function (date: string) {
    if (this.checkNull(date) === true) {
      return date;
    } else {
      const newDate = new Date(date);
      const year = newDate.getFullYear();
      const month = String(newDate.getMonth() + 1).padStart(2, '0');
      const day = String(newDate.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
  },
}

export default formatter;