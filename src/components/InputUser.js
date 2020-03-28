import React from 'react';


const ImportUser = () =>{
    return (
        
        <form class="form-inline">
            <div class="form-group mx-sm-3 mb-2">
                <label for="inputSearch" class="sr-only">Search</label>
                <input type="text" class="form-control" id="inputSearch" placeholder="Search..."/>
            </div>
            <button type="submit" class="btn btn-primary mb-2">Search</button>
        </form>
    )
}

export default ImportUser;