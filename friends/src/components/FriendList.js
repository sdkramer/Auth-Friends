import React from "react";

class FriendList extends React.Component {
  state = {
    friends: [
      {
        id: 1,
        name: 'Rachel Green',
        age: 30,
        email: 'rachel@friends.com'
      },
      {
        id: 2,
        name: 'Joey Tribbiani',
        age: 34,
        email: 'joey@friends.com'
      },
      {
        id: 3,
        name: 'Chandler Bing',
        age: 32,
        email: 'chandler@friends.com'
      },
      {
        id: 4,
        name: 'Ross Geller',
        age: 32,
        email: 'ross@friends.com'
      },
      {
        id: 5,
        name: 'Monica Bing',
        age: 31,
        email: 'monica@friends.com'
      },
      {
        id: 6,
        name: 'Phoebe Buffay-Hannigan',
        age: 30,
        email: 'phoebe@friends.com'
      }

    ]
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {};

  render() {
    return (
      <div>
        <div className="ui inverted segment">
          <div className="ui inverted relaxed divided list">
            {this.state.friends.map((friend) => (
              <div className="item">
                <div className="content">
                  <div className="header">Name: {friend.name}</div>
                  <div className="header">Age: {friend.age}</div>
                  <div className="header">Email: {friend.email}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default FriendList;
