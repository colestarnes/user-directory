import React from 'react';

export default class FetchRandomUser extends React.Component {

    state = {
        loading: true,
        person: null
    }

    async componentDidMount() {
        const url = "https://randomuser.me/api/?results=200&nat=us"
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ people: data.results, loading: false });
    }

    render() {
        if (this.state.loading) {
            return <div>loading...</div>;
        }

        if (!this.state.people.length) {
            return <div>didn't get a person</div>;
        }


        return (
            <div>
                {this.state.people.map(person => (
                    <div key={person.login.uuid}>
                        <div>{person.name.title}</div>
                        <div>{person.name.first}</div>
                        <div>{person.name.last}</div>
                        <img src={person.picture.large} />
                    </div>
                ))}
            </div>
        );
    }
}
