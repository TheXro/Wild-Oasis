import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useBookings() {
  
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  //Pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isLoading,
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    queryKey: ["bookings", page],
    queryFn: () => getBookings({page}),
  });

  //prefetching
  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (page < pageCount) {
    
    queryClient.prefetchQuery({
      queryKey: ["bookings", page + 1],
      queryFn: () => getBookings({page: page + 1}),
    })
  }
    

  console.log(bookings, count)
    return { isLoading, bookings, error,count };

}
