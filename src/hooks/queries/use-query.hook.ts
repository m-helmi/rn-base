import {useQuery} from 'react-query';
import {fetcher} from '@src/api';

interface Props {
  url: string;
  dependedParam?: string | number | boolean | string[];
  dependedKey?: string;
}
export const useCustomQuery = <T>({url, dependedParam, dependedKey}: Props) => {
  return useQuery<T, Error>(
    [dependedKey || url, dependedParam],
    async (): Promise<T> => {
      return await fetcher<T>(url);
    },
  );
};
