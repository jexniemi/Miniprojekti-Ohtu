import React from 'react';

class InputForm extends React.Component {
  
  
    render() {
        return (
           <form>
               <label>
                Otsikko:
                <input type="text" name="otsikko" />
                </label>
                <label>
                Kirjoittaja:
                <input type="text" name="kirjoittaja" />
                </label>
                <input type="submit" value="Tallenna" />
            </form>
          );
  }
}

export default InputForm;
