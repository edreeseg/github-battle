const React = require('react');
const PropTypes = require('prop-types');

function SelectLanguage(props){
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

    return (
        <ul className='languages'>
            {languages.map(lang => {
            return (
                <li key={lang}
                onClick={() => props.onSelect(lang)}
                style={lang === props.selectedLanguage ? {color: '#d0021b'} : null}
                >
                    {lang}
                </li>
            )
            })}
        </ul>
    );
}

SelectLanguage.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired, 
}

class Popular extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedLanguage: 'All',
        };
    this.updateLanguage = this.updateLanguage.bind(this);
    }
    updateLanguage(lang){
        this.setState((prevState) => {
            return {
                selectedLanguage: lang,
            }
        });
    }
    render(){
        return (
            <div>
                <SelectLanguage 
                    selectedLanguage={this.state.selectedLanguage}
                    onSelect={this.updateLanguage}
                />
            </div>
        );
    }
}

module.exports = Popular;