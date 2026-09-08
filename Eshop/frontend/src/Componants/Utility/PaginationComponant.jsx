import Pagination from "react-bootstrap/Pagination";

function PaginationComponent() {
  return (
    <Pagination className="justify-content-center my-4">
      <Pagination.Prev />

      <Pagination.Item active>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>

      <Pagination.Next />
    </Pagination>
  );
}

export default PaginationComponent;