
export default function Comment({comment}) {

  return (
    <div>
      <ul>
      <li>{comment.id} {comment.name}</li>
    </ul>
    </div>
  );
}