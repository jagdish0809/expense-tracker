import Expenses from "./components/Expenses";

const App = () => {
  const expenses = [
    { title: 'Car Insurance', amount: 295, date: new Date(2022, 11, 23) },
    { title: 'Cloths', amount: 40, date: new Date(2022, 11, 20) },
    { title: 'Shoes', amount: 100, date: new Date(2022, 11, 21) },
    { title: 'Watch', amount: 95, date: new Date(2022, 11, 2) }
  ]

  return (
    <div>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;