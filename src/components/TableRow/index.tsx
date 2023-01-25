interface Table {
  item: any[];
  onEdit: (item: any) => void;
  onDelete: (item: any) => void;
}

export default function TableRow({ item, onEdit, onDelete }: Table) {
  return (
    <tr>
      {Object.keys(item).map((key: string, index: number) => (
        <td key={index}>{item[key]}</td>
      ))}
      <td>
        <button onClick={() => onEdit(item)}>Edit</button>
        <button onClick={() => onDelete(item)}>Delete</button>
      </td>
    </tr>
  );
}
