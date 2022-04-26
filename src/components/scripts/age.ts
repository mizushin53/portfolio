function getAge(year: number, month: number, day: number | undefined) {

    // 今日の日付データを取得
    const today = new Date();
  
    // 生年月日の日付データを取得
    const birthdate = new Date(year, month - 1, day);
  
    // 今年の誕生日の日付データを取得
    const currentYearBirthday = new Date(today.getFullYear(), birthdate.getMonth(), birthdate.getDate());
  
    // 生まれた年と今年の差を計算
    let age = today.getFullYear() - birthdate.getFullYear();
  
    // 今日の日付と今年の誕生日を比較
    if (today < currentYearBirthday) {
      // 今年誕生日を迎えていない場合、1を引く
      age--;
    }
    // 年齢の値を返す
    return age;
  }

  export default getAge