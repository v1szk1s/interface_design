<script>
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
</script>

<div class="container mx-auto text-center">
    <h class="text-3xl p-6 dark:text-white">Prices</h>
</div>
<div class="p-5 container mx-auto text-center">
    <Table hoverable="true">
      <TableHead>
        <TableHeadCell>Prices (/ticket)</TableHeadCell>
          <TableHeadCell>2D</TableHeadCell>
          <TableHeadCell>3D</TableHeadCell>
          <TableHeadCell>Premier</TableHeadCell>
      </TableHead>
      <TableBody tableBodyClass="divide-y">
        <TableBodyRow>
          <TableBodyCell>Full price</TableBodyCell>
          <TableBodyCell>9€</TableBodyCell>
          <TableBodyCell>12€</TableBodyCell>
          <TableBodyCell>14€</TableBodyCell>
        </TableBodyRow>
        <TableBodyRow>
          <TableBodyCell>Young (under 14)</TableBodyCell>
          <TableBodyCell>6€</TableBodyCell>
          <TableBodyCell>9€</TableBodyCell>
          <TableBodyCell>11€</TableBodyCell>
        </TableBodyRow>
        <TableBodyRow>
          <TableBodyCell>Elderly (above 65)</TableBodyCell>
          <TableBodyCell>5€</TableBodyCell>
          <TableBodyCell>8€</TableBodyCell>
          <TableBodyCell>10€</TableBodyCell>
        </TableBodyRow>
      </TableBody>
    </Table>
</div>
