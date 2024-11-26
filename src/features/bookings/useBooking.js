import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

export function useBooking({bookingId}) {
  // let  {bookingId}  = useParams();
  console.log(bookingId);

  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["booking",'bookingId'],
    queryFn: () => getBooking(bookingId),
    // retry: false,
  });
  console.log(booking, 'useBooking');
  

  return { isLoading, booking, error };
}
