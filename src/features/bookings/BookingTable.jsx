import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";
import { useBookings } from "./useBookings";
import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";
import { useSearchParams } from "react-router-dom";

function BookingTable() {
  const { bookings, isLoading, count } = useBookings();

  //FILTER
  const [searchParams] =  useSearchParams();
  // console.log(searchParams);
  // if (1) return null;
  if (isLoading) return <Spinner />;
  

  if (!bookings.length) return <Empty resourceName="bookings" />;

  const filterValue = searchParams.get('status') || 'all';
  // console.log(filterValue);
  let filteredBookings;
  if (filterValue === 'all') filteredBookings = bookings;
  if (filterValue === 'unconfirmed') filteredBookings = bookings.filter((booking) => booking.status === 'unconfirmed');
  if (filterValue === 'checked-in') filteredBookings = bookings.filter((booking) => booking.status === 'checked-in');
  if (filterValue === 'checked-out') filteredBookings = bookings.filter((booking) => booking.status === 'checked-out');
  // console.log(filteredBookings);

  // SORT
  const sortValue = searchParams.get('sortBy') || 'start-date-desc';
  const [field, direction] = sortValue.split('-');
  const modifier = direction === 'asc' ? 1 : -1;
  const sortedBookings = filteredBookings.sort((a, b) => a[field] > b[field] ? modifier : -1 * modifier);

  return (
    <Menus>
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={sortedBookings}
          render={(booking) => (
            <BookingRow key={booking.id} booking={booking} />
          )}
        />

        <Table.Footer>
          <Pagination count={ count } />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default BookingTable;
