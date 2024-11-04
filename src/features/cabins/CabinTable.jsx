import { useQueries, useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getCabins } from "../../services/apiCabins";
import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";


function CabinTable() {
  const { isLoading, cabins, error } = useCabins();;
  const [searchParams] = useSearchParams();
  if (isLoading) {
    return <Spinner />;
  }
  if(!cabins.length) return <Empty resourceName="Cabins" />


  //FILTER
  console.log(searchParams);
  const filterValue = searchParams.get('discount') || "all";
  // console.log(filterValue);

  let filteredCabins;
  if (filterValue === 'no-discount') {
    filteredCabins = cabins.filter(cabin => cabin.discount === 0);
  }
  if (filterValue === 'with-discount') {
    filteredCabins = cabins.filter(cabin => cabin.discount > 0);
  }
  if (filterValue === 'all') {
    filteredCabins = cabins;
  }
  // console.log(filteredCabins);

  //SORT
  const sortBy = searchParams.get('sortBy') || 'name-asc';
  const [field, direction] = sortBy.split('-');
  console.log(field, direction);
  
  const modifier = direction === 'asc' ? 1 : -1;
  const sortedCabins = filteredCabins.sort((a, b) => a[field] > b[field] ? modifier : -1 * modifier);

  return (
    <div>
      <Menus>
        <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
          <Table.Header>
            <div>Image</div>
            <div>Cabin</div>
            <div>Capacity</div>
            <div>Price</div>
            <div>Discount</div>
          </Table.Header>
          <Table.Body
            data={sortedCabins}
            render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
          />
        </Table>
      </Menus>
    </div>
  );
}

export default CabinTable;
