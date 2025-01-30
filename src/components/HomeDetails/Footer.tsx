import { For, Stack, Table } from "@chakra-ui/react";
import { HouseObject } from "../../hooks/useHouse";

interface Props {
  house: HouseObject;
}
const Footer = ({ house }: Props) => {
  return (
    <Table.Root size="sm" striped>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>Product</Table.ColumnHeader>
          <Table.ColumnHeader textAlign="end">Price</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>address</Table.Cell>
          <Table.Cell textAlign="end">{house.address}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Description</Table.Cell>
          <Table.Cell textAlign="end">{house.description}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Price</Table.Cell>
          <Table.Cell textAlign="end">{house.price}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  );
};

export default Footer;
