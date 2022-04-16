import React from "react";
import Table from "components/organisms/Table";
import TableActions from "components/molecules/TableActions";

interface Props {
}
const AvailableGamesTable: React.FC<Props> = (props) => {
  const columns = [
    {
      label: "GAMEID",
      path: "gameId",
    },
    {
      label: "LIMIT",
      path: "limit",
    },
    {
      label: "ENTRY FEE",
      path: "entryFee",
    },
    {
      label: "NO. OF PLAYERS",
      path: "noOfPlayers",
    },
    {
      label: "DATE CREATED",
      path: "dateCreated",
    },
    {
      label: "",
      path: "actions",
    },
  ];

   const games = [
     {
       id: "1",
       gameId: "1",
       limit: "2",
       entryFee: "0.5 ETH",
       noOfPlayers: "0",
       dateCreated: "04/04/2022",
       actions: <TableActions />,
     },
     {
       id: "2",
       gameId: "2",
       limit: "2",
       entryFee: "0.5 ETH",
       noOfPlayers: "0",
       dateCreated: "04/04/2022",
       actions: <TableActions />,
     },
     {
       id: "3",
       gameId: "3",
       limit: "2",
       entryFee: "0.5 ETH",
       noOfPlayers: "0",
       dateCreated: "04/04/2022",
       actions: <TableActions />,
     },
     {
       id: "4",
       gameId: "4",
       limit: "2",
       entryFee: "0.5 ETH",
       noOfPlayers: "0",
       dateCreated: "04/04/2022",
       actions: <TableActions />,
     },
     {
       id: "5",
       gameId: "5",
       limit: "2",
       entryFee: "0.5 ETH",
       noOfPlayers: "0",
       dateCreated: "04/04/2022",
       actions: <TableActions />,
     },
     {
       id: "6",
       gameId: "6",
       limit: "2",
       entryFee: "0.5 ETH",
       noOfPlayers: "0",
       dateCreated: "04/04/2022",
       actions: <TableActions />,
     },
   ];


  return <Table columns={columns} data={games} />;
};

export default AvailableGamesTable;
