import { Router, Link } from 'preact-router';
import { h, render } from 'preact';
import { createHashHistory } from '../index';

const Home = (props) => <p>Home</p>;
const About = (props) => <p>About</p>;
const Search = (props) => <p>Search {JSON.stringify(props)}</p>;

const App = () => <main>
    <div>
        | <Link href="/home">link home</Link> |
        | <a href="#/home">home</a> |
        | <a href="#/about">about</a> |
        | <a href="#/search/query?x=1">search</a> |
    </div>
    <Router history={createHashHistory()}>
        <Home path="/" />
        <Home path="/home" />
        <About path="/about" />
        <Search path="/search/:query/:advanced?" />
    </Router>
</main>;

render(<App />, document.body);
