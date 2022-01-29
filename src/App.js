import React from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import coronaImage from './images/covid-19.png';

class App extends React.Component {

    // Persist the state and then pass it to different component
    state = {
        data: {},
        country: ''
    }

    async componentDidMount() {
        this.fetchDataAndSetState();
    }

    handleCountryChange = async (country) => {
        this.fetchDataAndSetState(country);
    }

     fetchDataAndSetState = async (country = '') => {
        const fetchedData = await fetchData(country);

        if (country) {
            this.setState({ data: fetchedData, country: country });
            return;
        }

        this.setState({ data: fetchedData, country: country});
    }

    render() {
        const { data, country} = this.state;

        return (
            <div className={styles.container}>
                <img className={ styles.image } src = {coronaImage} alt="COVID-19"/>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data = {data} country = {country}/>
            </div>
        )
    }
}

export default App;