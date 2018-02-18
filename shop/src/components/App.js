import React from 'react';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import SideBar from './SideBar/SideBar';
import Footer from './Footer/Footer';
import ContestList from './ContestList';
import Contest from './Contest';
import * as api from '../api';

const pushState = (obj, url) =>
  window.history.pushState(obj, '', url);

const onPopState = handler => {
  window.onpopstate = handler;
};

class App extends React.Component {
  static propTypes = {
    initialData: React.PropTypes.object.isRequired
  };
  state = this.props.initialData;
  componentDidMount() {
    onPopState((event) => {
      this.setState({
        currentCategoryId: (event.state || {}).currentCategoryId
      });
    });
  }
  componentWillUnmount() {
    onPopState(null);
  }
  fetchContest = (contestId) => {
    pushState(
      { currentCategoryId: contestId },
      `/contest/${contestId}`
    );
    api.fetchContest(contestId).then(contest => {
      this.setState({
        currentCategoryId: category._id,
        category: {
          ...this.state.category,
          [category._id]: contest
        }
      });
    });
  };
  fetchContestList = () => {
    pushState(
      { currentCategoryId: null },
      '/'
    );
    api.fetchContestList().then(contests => {
      this.setState({
        currentCategoryId: null,
        contests
      });
    });
  };
  fetchNames = (nameIds) => {
    if (nameIds.length === 0) {
      return;
    }
    api.fetchNames(nameIds).then(names => {
      this.setState({
        names
      });
    });
  };
  currentCategory() {
    return this.state.category[this.state.currentCategoryId];
  }
  pageHeader() {
    if (this.state.currentCategoryId) {
      return this.currentCategory().contestName;
    }

    return 'Naming Contests';
  }
  lookupName = (nameId) => {
    if (!this.state.names || !this.state.names[nameId]) {
      return {
        name: '...'
      };
    }
    return this.state.names[nameId];
  };
  addName = (newName, contestId) => {
    api.addName(newName, contestId).then(resp =>
      this.setState({
        category: {
          ...this.state.category,
          [resp.updatedcategory._id]: resp.updatedContest
        },
        names: {
          ...this.state.names,
          [resp.newName._id]: resp.newName
        }
      })
    )
    .catch(console.error);
  };
  currentContent() {
    if (this.state.currentCategoryId) {
      return <Contest
               contestListClick={this.fetchContestList}
               fetchNames={this.fetchNames}
               lookupName={this.lookupName}
               addName={this.addName}
               {...this.currentCategory()} />;
    }

    return <ContestList
            onContestClick={this.fetchContest}
            contests={this.state.category} />;
  }
  render() {
    return (
      <div className="App page">
        <Header message={this.pageHeader()} />
        <Nav />
        <SideBar />
        <Footer />
        {/* {this.currentContent()} */}
      </div>
    );
  }
}

export default App;
