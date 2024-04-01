import React from 'react'
import NavBar from './NavBar'

const SearchEmployee = () => {
  return (
    <div>
        <NavBar/>
        <div class="container">
        <div class="row">
            <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <div class="row g-3">

                    <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label for="" class="form-label">Phone Number</label>
                        <input type="number" name="" id="" class="form-control"/>
                    </div>

                    <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button class="btn btn-secondary w-100">Search</button>
                    </div>

                </div>


            </div>
        </div>
    </div>

    </div>
  )
}

export default SearchEmployee