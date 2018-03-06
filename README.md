# custom-history
Custom hash history implemenation for preact

## INSTALL
```
npm i -S custom-history
```

## USAGE
```ts
import { Router, Link } from 'preact-router';
import { h, render } from 'preact';
import { createHashHistory } from 'custom-history';

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
```

## CHANGELOG
See [CHANGELOG](CHANGELOG.md)

## TODO
* Move to jest, ts-jest
