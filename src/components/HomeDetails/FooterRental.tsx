import { SimpleGrid, Table } from "@chakra-ui/react";
import { HouseObject } from "../../hooks/useHouse";
import { numberWithCommas } from "../HomePage/HouseCard";

interface Props {
  house: HouseObject;
}
const Footer = ({ house }: Props) => {
  function capitalizeFirstLetter(val: string) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
  }
  return (
    <SimpleGrid columns={2} padding={10} columnGap={5}>
      <Table.Root size="sm" striped>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>House Details</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>address</Table.Cell>
            <Table.Cell textAlign="end">{house.address}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>State</Table.Cell>
            <Table.Cell textAlign="end">{house.state}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>City</Table.Cell>
            <Table.Cell textAlign="end">{house.city}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Zip Code</Table.Cell>
            <Table.Cell textAlign="end">{house.zip_code}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Sqft</Table.Cell>
            <Table.Cell textAlign="end">{house.sqft}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Unit Type</Table.Cell>
            <Table.Cell textAlign="end">{house.unit_type}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Listed Date</Table.Cell>
            <Table.Cell textAlign="end">
              {house.update_date
                ? house.update_date.toString().substring(0, 10)
                : house.listed_date.toString().substring(0, 10)}
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Description</Table.Cell>
            <Table.Cell textAlign="end">
              {capitalizeFirstLetter(house.description)}
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Price</Table.Cell>
            <Table.Cell textAlign="end">
              {numberWithCommas(house.price)}
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>

      <Table.Root size="sm" striped>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader></Table.ColumnHeader>
            <Table.ColumnHeader textAlign="end"></Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Beds</Table.Cell>
            <Table.Cell textAlign="end">{house.beds}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Baths Full</Table.Cell>
            <Table.Cell textAlign="end">{house.baths_full}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Baths Half</Table.Cell>
            <Table.Cell textAlign="end">{house.baths_helf}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Heating</Table.Cell>
            <Table.Cell textAlign="end">
              {capitalizeFirstLetter(house.heating)}
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Cooling</Table.Cell>
            <Table.Cell textAlign="end">{house.cooling}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Tag</Table.Cell>
            <Table.Cell textAlign="end">{house.tag}</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Purchase Type</Table.Cell>
            <Table.Cell textAlign="end">{house.purchase_type}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Gross Income Per Month</Table.Cell>
            <Table.Cell textAlign="end">
              {numberWithCommas(house.gross_income_per_month)}
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Credit Score</Table.Cell>
            <Table.Cell textAlign="end">{house.credit_score}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Appliances</Table.Cell>
            <Table.Cell textAlign="end">{house.appliances}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Management</Table.Cell>
            <Table.Cell textAlign="end">{house.management}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </SimpleGrid>
  );
};

export default Footer;
