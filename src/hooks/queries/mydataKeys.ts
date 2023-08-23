//TODO: Please Edit Or Add Key Object

const mydataKeys = {
  all: ['mydatas'] as const,
  lists: () => [...mydataKeys.all, 'list'] as const,
  list: () => [...mydataKeys.lists()] as const,
  details: () => [...mydataKeys.all, 'detail'],
  detail: (id: number) => [...mydataKeys.details(), id] as const,
};

// 💠 모든 members 삭제
// QueryClient.removeQueries(mydataKeys.all);

// 💠 모든 리스트 invalidate
// QueryClient.invalidateQueries(mydataKeys.lists())

// 💠 prefetch 하나의 member
// QueryClient.prefetchQueries(mydataKeys.detail(id), () => fetchTodo(id));

export default mydataKeys;
