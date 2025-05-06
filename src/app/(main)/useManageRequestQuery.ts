import requestService from "@/services/request.service";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { IMainForm } from "./(form)/main-form.types";

export function useManageRequestsQuery() {
  const [page, setPage] = useState(1);

  const { data, isPending, refetch } = useQuery({
    queryKey: ["requests"],
    queryFn: () => requestService.getRequests({ skip: 0, take: page * 10 }),
  });

  const { mutate: createRequest } = useMutation({
    mutationKey: ["createRequest"],
    mutationFn: (data: IMainForm) => requestService.createRequest(data),
    onSuccess() {
      refetch();
    },
  });

  useEffect(() => {
    if (page === 1) return;

    refetch();
  }, [page]);

  const { mutate: deleteRequest } = useMutation({
    mutationKey: ["deleteRequest"],
    mutationFn: (id: number) => requestService.deleteRequest(id),
    onSuccess() {
      refetch();
    },
  });

  const requests = data?.data.items?.length ? data.data.items : null;

  return {
    requests,
    deleteRequest,
    createRequest,
  };
}
