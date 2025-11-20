import {useQuery} from "@tanstack/react-query";
import {tasksQueryKey} from "./querykey";
import {getTasks} from "./api";

export const useTasks = () => {
  return useQuery({
    queryKey: tasksQueryKey.list(),
    queryFn: () => getTasks(),
  });
};
