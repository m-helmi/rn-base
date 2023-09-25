export const serializeMobileNumber = (mobile: string) =>
  mobile
    .replace(/[^\dA-Z]/g, '')
    .replace(/(.{3})/g, '$1 ')
    .trim();

export const deSerializeMobileNumber = (mobile: string) =>
  mobile.replace(/ /g, '');
