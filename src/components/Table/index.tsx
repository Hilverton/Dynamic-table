import TableRow from "../TableRow";

export default function Table({ items, headers, onEdit, onDelete }: any) {
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header: any, index: number) => (
            <th key={index}>{header}</th>
          ))}
          <th>actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item: any) => (
          <TableRow key={item.id} item={item} onEdit={onEdit} onDelete={onDelete} />
        ))}
      </tbody>
    </table>
  );
}
