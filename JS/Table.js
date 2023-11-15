import "../Css/Table.css";

function Table(props)
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
Table.defaultProps = 
{
    Heading1: "Heading 1",
    Heading2: "Heading 2",
    Heading3: "Heading 3",
    Heading4: "Heading 4",
    Heading1field1: "field 1",
    Heading2field1: "field 1",
    Heading3field1: "field 1",
    Heading4field1: "field 1",
    Heading1field2: "field 2",
    Heading2field2: "field 2",
    Heading3field2: "field 2",
    Heading4field2: "field 2",

}

export default Table;