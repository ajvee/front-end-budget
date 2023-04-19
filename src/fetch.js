import api from "./api";

function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("/")
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {data.map(transaction => (
        <p key={transaction.id}>{transaction.description}</p>
      ))}
    </div>
  );
}
