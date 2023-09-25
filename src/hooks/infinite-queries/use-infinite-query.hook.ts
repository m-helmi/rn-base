import {useInfiniteQuery, UseInfiniteQueryOptions} from 'react-query';
import {fetcher} from '@src/api';
import {Page} from '@src/models';

interface Props {
  url: string;
  dependedKey?: string;
  options?: UseInfiniteQueryOptions<any, any>;
  dependedParams?: any[];
  limit?: number;
}
export const useScrollInfiniteQuery = <T>({
  url,
  dependedKey,
  options,
  dependedParams,
  limit,
}: Props) => {
  const restParam = dependedParams?.length ? {...dependedParams} : [];
  const {
    data: dataPage,
    error,
    refetch,
    remove,
    ...rest
  } = useInfiniteQuery<Page<T>, Error, Page<T>>(
    [dependedKey || url, restParam],
    async ({pageParam = 1}): Promise<Page<T>> => {
      return await fetcher<Page<T>>(
        `/${url}${url.includes('?') ? '&' : '?'}page=${pageParam}&limit=${
          limit || 10
        }`,
      );
    },

    {
      ...options,
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.page === lastPage.pageCount) {
          return undefined;
        }
        return pages.length + 1;
      },
      refetchOnReconnect: true,
    },
  );

  return {
    data: dataPage?.pages?.map(ele => ele?.data).flat(),
    totalCount: dataPage?.pages[dataPage?.pages?.length - 1]?.totalCount,
    onRefetch: () => {
      refetch();
      remove();
    },
    refetch,
    remove,
    error,
    ...rest,
  };
};
