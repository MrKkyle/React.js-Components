import "../Css/Table.css";

function Table({Heading1, Heading1field1, Heading1field2, Heading2, Heading2field1, Heading2field2, Heading3, Heading3field1, Heading3field2,})
{
  return (
  <>
    <table>
        <tr>
            <th>{props.Heading1}</th>
            <th>{props.Heading2}</th>
            <th>{props.Heading3}</th>
            <th>{props.Heading4}</th>
        </tr>
        <tr>
            <th>{props.Heading1field1}</th>
            <th>{props.Heading2field1}</th>
            <th>{props.Heading3field1}</th>
            <th>{props.Heading4field1}</th>
        </tr>
        <tr>
            <th>{props.Heading1field2}</th>
            <th>{props.Heading2field2}</th>
            <th>{props.Heading3field2}</th>
            <th>{props.Heading4field2}</th>
        </tr>
    </table>
  </>
  );
  
};

export default Table;