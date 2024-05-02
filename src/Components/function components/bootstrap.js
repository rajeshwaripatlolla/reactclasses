// import Badge from 'react-bootstrap/Badge';
// import Button from 'react-bootstrap/Button';

// function Example() {
//   return (
//     <div>
//       <h1>
//         Example heading
//         <Badge bg="secondary" as={Button}>
//           New
//         </Badge>
//       </h1>
//     </div>
//   );
// }

// export default Example;
import Form from 'react-bootstrap/Form';

function TextControlsExample() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
  );
}

export default TextControlsExample;