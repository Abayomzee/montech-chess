import React from "react";
import TableHead from "components/molecules/TableHead";
import TableBody from "components/molecules/TableBody";

interface Props {
  columns: any;
  data: any;
}
const Table: React.FC<Props> = (props) => {
  const { data, columns } = props;
  return (
    <div className='table-wrapper'>
      <table className="table">
        <TableHead columns={columns} />
        <TableBody data={data} columns={columns} />
      </table>
    </div>
  );
};

export default Table;
