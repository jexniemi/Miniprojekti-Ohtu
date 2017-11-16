import React from 'react';

class InputForm extends React.Component {


    render() {
        return (
            <form>
                <label>
                    Title: <br />
                    <input type="text" name="otsikko" />
                </label> <br />
                <label>
                    Author: <br />
                    <input type="text" name="kirjoittaja" />
                </label> <br />
                <input type="submit" value="Tallenna" />
            </form>
        );
    }
}

export default InputForm;
