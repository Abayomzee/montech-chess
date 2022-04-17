import React from "react";
import Table from "components/organisms/Table";
import TableActions from "components/molecules/TableActions";

interface Props {
}
const CompletedGamesTable: React.FC<Props> = (props) => {
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
      label: "WINNER",
      path: "winner",
    },
    {
      label: "AMOUNT WON",
      path: "amountWon",
    },
    {
      label: "DATE ENDED",
      path: "dateEnded",
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
       winner: "Ox449...103429",
       amountWon: "0.003 ETH",
       dateEnded: "04/04/2022",
       actions: <TableActions disableRequest={true} />,
     },
     {
       id: "2",
       gameId: "2",
       limit: "2",
       winner: "Ox449...103429",
       amountWon: "0.003 ETH",
       dateEnded: "04/04/2022",
       actions: <TableActions disableRequest={true} />,
     },
     {
       id: "3",
       gameId: "3",
       limit: "2",
       winner: "Ox449...103429",
       amountWon: "0.003 ETH",
       dateEnded: "04/04/2022",
       actions: <TableActions disableRequest={true} />,
     },
     {
       id: "4",
       gameId: "4",
       limit: "2",
       winner: "Ox449...103429",
       amountWon: "0.003 ETH",
       dateEnded: "04/04/2022",
       actions: <TableActions disableRequest={true} />,
     },
     {
       id: "5",
       gameId: "5",
       limit: "2",
       winner: "Ox449...103429",
       amountWon: "0.003 ETH",
       dateEnded: "04/04/2022",
       actions: <TableActions disableRequest={true} />,
     },
     {
       id: "6",
       gameId: "6",
       limit: "2",
       winner: "Ox449...103429",
       amountWon: "0.003 ETH",
       dateEnded: "04/04/2022",
       actions: <TableActions disableRequest={true} />,
     },
   ];


  return <Table columns={columns} data={games} />;
};

export default CompletedGamesTable;
