export const tasksQueryKey = {
  all: ["tasks"] as const,
  list: () => [...tasksQueryKey.all] as const,
};
