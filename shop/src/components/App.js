import React from 'react';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import FrontPageContent from './FrontPageContent/FrontPageContent';
import Footer from './Footer/Footer';
import TypeList from './TypeList';
import Type from './Type';
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
        currentTypeId: (event.state || {}).currentTypeId
      });
    });
  }
  componentWillUnmount() {
    onPopState(null);
  }
  fetchType = (typeId) => {
    pushState(
      { currentTypeId: typeId },
      `/type/${typeId}`
    );
    api.fetchType(typeId).then(type => {
      this.setState({
        currentTypeId: type._id,
        type: {
          ...this.state.types,
          [type._id]: type
        }
      });
    });
  };
  fetchTypeList = () => {
    pushState(
      { currentTypeId: null },
      '/'
    );
    api.fetchTypeList().then(type => {
      this.setState({
        currentTypeId: null,
        type
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
  currentType() {
    return this.state.types[this.state.currentTypeId];
  }
  pageHeader() {
    if (this.state.currentTypeId) {
      return this.currentType().typeName;
    }

    return 'Naming type';
  }
  lookupName = (nameId) => {
    if (!this.state.names || !this.state.names[nameId]) {
      return {
        name: '...'
      };
    }
    return this.state.names[nameId];
  };
  addName = (newName, typeId) => {
    api.addName(newName, typeId).then(resp =>
      this.setState({
        types: {
          ...this.state.types,
          [resp.updatedType._id]: resp.updatedType
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
    if (this.state.currentTypeId) {
      return <Type
               typeListClick={this.fetchTypeList}
               fetchNames={this.fetchNames}
               lookupName={this.lookupName}
               addName={this.addName}
               {...this.currentType()} />;
    }

    return <typeList
            onTypeClick={this.fetchType}
            types={this.state.types} />;
  }
  render() {
    return (
      <div className="App page">
        <Header message={this.pageHeader()} />
        <Nav />
        <FrontPageContent />
        <Footer />
        {/* {this.currentContent()} */}
      </div>
    );
  }
}

export default App;
