import { MenuList, Menu, Button, MenuButton, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props
{
    onSelectSort: (sortOrder:string) =>void;
    selectedSort: string|null;
}
export function SortSelector({selectedSort, onSelectSort} : Props) {
  const sortOrders = [
    { value: "", label: "Relevence" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
      Order by:{selectedSort||'Relevence'}
      </MenuButton>

      <MenuList>
        {sortOrders.map(item => <MenuItem onClick = {() => onSelectSort(item.value)}key={item.value} value={item.value}>{item.label}</MenuItem>)}
      </MenuList>
    </Menu>
  );
}
