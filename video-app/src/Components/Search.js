import React from 'react';

import '../App.css';


const Search = (props) => {
    return(
        <div className="container">
            <div className="row">
                <section className="col s4 offset-s4">
                    <form action="" onSubmit={props.handleSubmit}>
                        <div className="input-field">
                            <input placeholder="Search movie" type="text" onChange={props.onChange}/>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
}

export default Search;
