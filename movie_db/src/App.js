//  as 사용해서 너무 긴 이름 줄여서 사용 가능(BrowserRouter => Router)
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from './components/Header';

import Main from "./pages/Main";
import Movie from "./pages/Movie";

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                {/* exact 명령어는 path가 완전히 일치하는 경우만 허용.
                만약 명령어 사용하지 않으면 /movie 페이지로 url 이동해도 / 페이지가 렌더링 됨. */}
                <Route path="/" component = {Main} exact/> 
                <Route path="/movie" component = {Movie} />
            </Switch>
        </Router>
    )
}

export default App; 