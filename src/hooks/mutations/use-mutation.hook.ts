import {ApiProps} from '@src/utils';
import {useMutation} from 'react-query';

interface Props<I> {
  url: string;
  api: (props: ApiProps<I>) => Promise<any>;
}
// --> I for input
// --> R for Response
export const useCustomMutation = <I, R>({url, api}: Props<I>) => {
  return useMutation<R, Error, I, any>(url, async (mutateBody: I) => {
    const res = await api({url, inputs: mutateBody});
    return res;
  });
};
