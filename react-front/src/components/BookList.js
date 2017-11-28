import React from 'react';

class BookList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var renderBooks = this.props.books.map((b, id) => 
            <p>{b.author}</p>
        )

        return(
            <div>
                {renderBooks}
            </div>
        )
    }
}

export default BookList;