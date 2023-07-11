//TODO: Please Edit Or Add Key Object

const memberKeys = {
  all: ['members'] as const,
  lists: () => [...memberKeys.all, 'list'] as const,
  list: () => [...memberKeys.lists()] as const,
  details: () => [...memberKeys.all, 'detail'],
  detail: (id: number) => [...memberKeys.details(), id] as const,
};

// 💠 모든 members 삭제
// QueryClient.removeQueries(memberKeys.all);

// 💠 모든 리스트 invalidate
// QueryClient.invalidateQueries(memberKeys.lists())

// 💠 prefetch 하나의 member
// QueryClient.prefetchQueries(memberKeys.detail(id), () => fetchTodo(id));

export default memberKeys;
