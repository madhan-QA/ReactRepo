import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';
import srcImg from './assets/config.png';
import opImg from './assets/jsx-ui.png';


const reactIcons =[reactImg,componentsImg,srcImg,opImg]

const reactDescriptions = ['Fundamental', 'Crucial', 'Core',];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcept(details){
  return(
    <li>
      <img src={details.image} alt ={details.title}></img>
      <h3>{details.description}</h3>
      <p>{details.title}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title="Components"
              description="The core UI building block."
              image={reactIcons[0]}
            />
            <CoreConcept title="Props" 
            image={reactIcons[1]}
            description="The core Props block."
            />


            <CoreConcept title="JSX" 
            image={reactIcons[2]}
            description="The core Props JSX Block."/>
            <CoreConcept title="JS" 
            image={reactIcons[3]}
            description="The core Props JS Block."/>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
