import React from 'react';
import Tip from "./Tip";

class BookList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var renderBooks = this.props.books.map((b, id) =>
            <Tip book={b} />
        )

        return (
            <div>
                {renderBooks}
            </div>
        )
    }
}

const styles = {
}

export default BookList;