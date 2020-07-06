import React, { Component } from 'react'
import axios from "axios"
import Cards  from './Cards'
import { Input } from 'antd';
import Pagination from "./Pagination"

class Dashbord extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       data:[],
       filterArr:[],
       filterValue:"",
       total:"",
       perPage:""
    }
  }

  componentDidMount(){
    this.paginate("",1)
  }

  paginate = (e,pageNumber) => {
    let allPageNo = document.querySelectorAll(".pointer")
    allPageNo.forEach(ele => ele.classList.remove("active-page"))
    if(e !== "") {
      e.target.classList.add("active-page")
    }
    axios({
      url:`https://reqres.in/api/users?page=${pageNumber}`,
      method:"GET",
      headers:{"Content-Type":"application/json"}
    }).then(res => {
      this.setState({
        data:res.data.data,
        total:res.data.total,
        perPage:res.data.per_page
      })
      this.filterData()
    }).catch(err => console.log(err))
  };

  filterData = (e) => {
    this.setState({
      filterValue : e ? e.target.value : ""
    }, () => {
      let filterName = this.state.filterValue.toLowerCase()
      let makeCopyData = [...this.state.data]
      this.setState({
        filterArr:makeCopyData.filter(card => (card.first_name +" "+card.last_name).toLowerCase().includes(filterName))
      })
    })
  }
  render() {
    return (
      <div className="container mx-auto mt-5">
        <Input placeholder="Search By Name" onChange={(e)=>this.filterData(e)} value={this.state.filterValue} />
        <div className="row mt-4">
          {this.state.filterArr.length ? (
            this.state.filterArr.map(card => {
              return <Cards key = {card.id} name = {card.first_name +" "+card.last_name} email = {card.email} imgUrl = {card.avatar}  />
            })
          ) : ""}
        </div>
          <Pagination total={this.state.total} perPage={this.state.perPage} changePage={this.paginate} />
      </div>
    )
  }
}
export default Dashbord