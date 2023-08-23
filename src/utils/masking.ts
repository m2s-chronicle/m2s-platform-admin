//* Msking Indevidual Imformation

const masking = {
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
   * 이름 마스킹
   * @param name
   * @returns 홍길동 -> 홍*동, 김꽃두레 -> 김**레, 김숙 -> *숙
   */
  name: function (name: string) {
    if (this.checkNull(name) === true) return '-';
    if (name.length <= 2) return name.replace(name.substring(0, 1), '*');
    return name[0] + '*'.repeat(name.substring(1, name.length - 1).length) + name[name.length - 1];
  },

  /**
   * 전화번호 마스킹
   * @param phone
   * @returns 01012345678 -> 010-****-5678
   */
  phone: function (phone: string) {
    if (this.checkNull(phone) === true) return '-';
    const digits = phone.replace(/\D/g, '');
    if (digits.length === 11) {
      // Format as 010-****-5678
      return `${digits.slice(0, 3)}-${'****'}-${digits.slice(7)}`;
    } else if (digits.length > 11) {
      return `${digits.slice(0, 3)}-${'****'}-${digits.slice(7, digits.length)}`;
    }
    return phone;
  },

  /**
   * 이메일 마스킹
   * @param email
   * @returns username@gmail.com -> use*****@gmail.com
   */
  email: function (email: string) {
    if (this.checkNull(email) === true) {
      return email;
    } else {
      const mask = '*'.repeat(email.split('@')[0].length - 3);
      return email[0] + email[1] + email[2] + mask + email.slice(mask.length + 3, email.length);
    }
  },

  /**
   * 주민번호 마스킹(RRN:Resident Registration Number)
   * @param str
   * @returns 910101-1234567 -> 910101-1******
   */
  rrn: function (str: string) {
    if (this.checkNull(str)) return str;
    return str.substring(0, str.length - 6) + '******';
  },
};

export default masking;
