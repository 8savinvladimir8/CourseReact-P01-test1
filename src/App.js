import { Card } from 'antd';
import './App.css';

const x1 = 4;
const x2 = 2;
if (x2===0) {
  throw new Error("ошибка деления на ноль");
}

function App() {
  return (
    <div className="App">
      <Card title="Уравнение деления" bordered={false} style={{ width: 300 }}>
      <p>{x1} / {x2} = {x1/x2}</p>
    </Card>
    
    </div>
  );
}

export default App;
