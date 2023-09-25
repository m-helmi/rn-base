import {fetcher} from '@src/api';
import {Page, PageBranches} from '@src/models';
import {useInfiniteQuery, UseInfiniteQueryOptions} from 'react-query';

interface Props {
  url: string;
  dependedKey?: string;
  options?: UseInfiniteQueryOptions<any, any>;
  dependedParams?: any[];
  limit?: number;
  enabled?: boolean;
}
export const useScrollInfiniteQuery = <T>({
  url,
  dependedKey,
  options,
  dependedParams,
  limit,
  enabled,
}: Props) => {
  const restParam = dependedParams?.length ? {...dependedParams} : [];
  const {
    data: dataPage,
    error,
    refetch,
    remove,
    ...rest
  } = useInfiniteQuery<PageBranches<T>, Error, PageBranches<T>>(
    [dependedKey || url, restParam],
    async ({pageParam = 1}): Promise<PageBranches<T>> => {
      return await fetcher<PageBranches<T>>(
        `/${url}${url.includes('?') ? '&' : '?'}page=${pageParam}&limit=${
          limit || 10
        }`,
      );
    },

    {
      ...options,
      enabled,
      getNextPageParam: (lastPage, pages) => {
        if (
          lastPage.data.pagination.current_page ===
          lastPage.data.pagination.total_pages
        ) {
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
