import './App.css';
import Navbar from './components/navbar/Navbar';
import TextArea from './components/TextArea';

const App = () => {
  const list = ['Home', 'Features', 'Pricing', 'About'];

  return (
    <div>
      <Navbar appName='React 101' list={list} />
      <div className='area-list'>
        <TextArea
          title='Declarative'
          body='React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.'
          footer='Declarative views make your code more predictable and easier to debug.'
        />
        <TextArea
          title='Component-Based'
          body='Build encapsulated components that manage their own state, then compose them to make complex UIs.'
          footer='Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.'
        />
        <TextArea
          title='Learn Once, Write Anywhere'
          body='We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.'
          footer='React can also render on the server using Node and power mobile apps using React Native.'
        />
      </div>
    </div>
  );
};

export default App;
