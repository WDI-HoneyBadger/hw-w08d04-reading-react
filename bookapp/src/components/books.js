import React from 'react';

const book = (props) => {
    return (
        <div >
            <div onMouseOver={() => { props.showCurrentBook(props.book) }}
                className="books">
                <div className="top">
                    <h2> {props.book.title}</h2>
                    <button onClick={() => { props.deleteBook(props.book.id) }}>
                        <i class="material-icons">
                            delete</i></button>
                </div>
                <div className="end">
                    <h5>by:{props.book.author} | </h5> <h5>{props.book.release_date}</h5>
                </div>
            </div>
        </div>
    )
}
export default book;

