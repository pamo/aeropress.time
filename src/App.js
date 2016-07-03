import React from 'react';

const App = (props) => {
  const { title } = props;
  return (
    <h1>{title}</h1>
    );
};

App.propTypes = {
  title: React.PropTypes.string
};

export default App;
