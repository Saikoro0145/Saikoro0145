import About from './components/About';
import Header from './components/Header';
import ProjectCollection from './components/ProjectCollection';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <ProjectCollection />
        <About />
      </main>
    </>
  );
}
