import './App.css';
import Information from './Components/Information';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Hobby from './Components/Hobby';
import General from './Components/General';



function App() {
  const inf = [
    {
      id: 1,
      myName: "София Старокожева",
      address: "адрес: Латвия, Рига",
      email: "емейл: sofiia.starokozheva@gmail.com",
      number: "тел: " + 37124985099,
    },
  ];

  const education = [
    {
      id: 1,
      first: "Оконченное среднее",
      second: "Неоконченное высшее",
      third: "IT школа Tel-Ran",
    },
  ];

  const experience = [
    {
      id: 1,
      exp1: "Онлайн продажа детских книг",
      exp2: "Продавец-консультант в 'Drogas'",
      exp3: "Работник в клининговой компании"
    }
  ];
  

  return (
    <>
    {
      inf.map((data) => {
        return <Information
        key={data.id}
        myName={data.myName}
        address={data.address}
        email={data.email}
        number={data.number}
        />
      })
    }

    {
      education.map((data) => {
        return <Education 
        key={data.id}
        first={data.first}
        second={data.second}
        third={data.third}
        />
      })
    }

    {
      experience.map((data) => {
        return <Experience
        key={data.id}
        exp1={data.exp1}
        exp2={data.exp2}
        exp3={data.exp3}
        />
      })
    }

    <Hobby/>

    <General/>


    </>

  );
}

export default App;
