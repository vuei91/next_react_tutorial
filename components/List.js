const List = ({ element, index, 글제목배열, 제목변경함수 }) => {
  return (
    <div className="list">
      <h4>{element}</h4>
      <p>
        <button
          onClick={() => {
            let copy = [...글제목배열];
            copy.splice(index, 1);
            제목변경함수(copy);
          }}
        >
          삭제
        </button>
      </p>
    </div>
  );
};

export default List;
