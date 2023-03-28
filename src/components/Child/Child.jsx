import React, { Component } from 'react'

export default class Child extends Component {




    render() {

        console.log(this.props)

        let { name, price, category, onSale, id, count } = this.props.product

        let delfunc = this.props.del

        let update = this.props.update

        return (
            <>
                <div className="col-3">
                    <div className='bg-warning p-4 rounded-4 position-relative '>

                        <h5>{id}</h5>
                        <h5>Product Name : {name}</h5>
                        <h5>Price : {price}</h5>
                        <h5>Category : {category}</h5>
                        <h5>Count : {count}</h5>


                        {onSale === true ? <div className='bg-danger position-absolute top-0 end-0 p-2 me-2'>sale</div> : ''}

                        <button onClick={() => { delfunc(id) }} className='btn btn-danger w-100'>Delete</button>
                        
                       {/* update using id  */}

                        {/* <button onClick={() => { update(id) }} className='btn btn-info w-100 mt-2'>Update</button> */}


                        {/* update using whole object */}

                        <button onClick={() => { update(this.props.product) }} className='btn btn-info w-100 mt-2'>Update</button>


                    </div>
                </div>
            </>
        )
    }
}
