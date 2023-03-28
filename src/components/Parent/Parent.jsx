import React, { Component } from 'react'
import Child from '../Child/Child';
import Navbar from './../Navbar/Navbar';
 

export default class Parent extends Component {

    state = {

        allProduct: [
            { id: 1, name: 'samsung', price: '5000', category: 'mobile', onSale: true , count : 10 },
            { id: 2, name: 'iphone', price: '10000', category: 'mobile', onSale: false, count: 7},
            { id: 3, name: 'huwai', price: '2000', category: 'mobile', onSale: true, count: 12 },
            { id: 4, name: 'shawmei', price: '5000', category: 'mobile', onSale: false, count: 0}
        ]
    }

    deleteElement = (idOfProduct) => {

        console.log(idOfProduct);

        // delete and display after deleting

        //1- copy
        let newArray = [...this.state.allProduct]

        //2- delete data ( via filter (return all product except product that has id == id stored in parameter)

        let resArray = newArray.filter(function (product) { return product.id !== idOfProduct })

        //3- updaate data

        this.setState({ allProduct: resArray })
    }

    // update using id 
    // updateCount = (idOfProduct) =>{


    //     console.log("hello")

    //     ////1- copy
    //     let newArray = [...this.state.allProduct]

    //     // //2- increase count 
        
    //     let objectArray = newArray.filter(function (product) { return product.id == idOfProduct }) // return array

    //     let index = newArray.indexOf(objectArray[0])

    //     newArray[index].count++
        
    //     // x[0].count++

    //     console.log(index)

    //     //3- updaate data

    //     this.setState({ allProduct: newArray })

    // }

    // update using object 

    updateCount = (object) => {


        console.log(object)

        ////1- copy
        let newArray = [...this.state.allProduct]

        // //2- increase count 

        let index = newArray.indexOf(object)

        newArray[index].count++

        console.log(index)

        //3- updaate data

        this.setState({ allProduct: newArray })

    }

    render() {
        return (
            <>
                

                <div className='bg-secondary p-4'>
                    <h2>Hello CRUD</h2>

                    <div className='row'>

                        {this.state.allProduct.map((elem , index) => { return < Child product={elem} del={this.deleteElement} update={this.updateCount} key={index}/> })}

                    </div>
                </div>
            </>
        )
    }
}
