import {Page} from '@src/models';
import {QueryClient} from 'react-query';

interface CacheProps {
  cacheKey: string;
  queryClient: QueryClient;
}
export const getCachedData = <T>({cacheKey, queryClient}: CacheProps) => {
  return queryClient.getQueriesData<T>(cacheKey)[0][1];
};
interface SetCacheProps<T> extends CacheProps {
  data: T;
}
export const setCachedData = <T>({
  cacheKey,
  data,
  queryClient,
}: SetCacheProps<T>) => {
  return queryClient.setQueriesData<T>(cacheKey, data);
};

export interface InfinitePage<T> {
  pages: Page<T>[];
}

export const getInfiniteCachedData = <T>({
  cacheKey,
  queryClient,
}: CacheProps) => {
  const cachedData =
    queryClient.getQueriesData<InfinitePage<T>>(cacheKey)[0][1];
  const {pages} = cachedData;
  return {data: {...pages[0]}.data, cachedData};
};
interface SetInfiniteCacheProps<T> extends CacheProps {
  data: T[];
  cachedData: InfinitePage<T>;
}
export const setInfiniteCachedData = <T>({
  cacheKey,
  cachedData,
  data,
  queryClient,
}: SetInfiniteCacheProps<T>) => {
  const firstPage: Page<T> = {...cachedData.pages[0], data};
  const newCachedData = {
    ...cachedData,
    pages: [firstPage, ...cachedData.pages.splice(0)],
  };
  return queryClient.setQueriesData<InfinitePage<T>>(cacheKey, newCachedData);
};
