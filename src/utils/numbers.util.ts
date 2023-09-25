export const convertNumbers2English = (str: string) => {
  return str?.replace(/[\u0660-\u0669]/g, c => `${c.charCodeAt(0) - 0x0660}`);
};

export const convertNumber2Arabic = (str: string) => {
  let ArabicName = '۰۱۲۳٤٥٦۷۸۹';
  return str?.replace(/[0-9]/g, c => ArabicName[+c]);
};
