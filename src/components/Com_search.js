import React , { Component } from 'react';
import Render from './Com_render';
import { getData } from './data';


export default class Search extends Component{


	constructor(props){
		super(props);
		this.state = {
		    obj: []
		  };
		this.mapData = this.mapData.bind(this);

	}

	mapData(){
		var x = this.refs.search.value;
		console.log(x);
		  getData(x).then((response) => {
			 this.setState({
				obj : response.data.items
			});
		})
	}

	render(){
		var renderList = this.state.obj.map((item,i)=>{
			return <Render key={i} obj={item}/>
		})
		
		return (
		<div className="container">
			
				<div className="row" className={"search"}>
    			    <div className="col-lg-12">
    			      <div className="input-group">
    			        <input type="text" className="form-control" name="search" ref="search" placeholder="Search for..." />
    			        <span className="input-group-btn">
    			          <button className="btn btn-default" type="submit" value="submit" onClick={this.mapData}>Go!</button>
    			        </span>
    			      </div>
    			    </div>
    			</div>
	
      			<div className="list" className={"list"}>
					{renderList}
				</div>

		</div>
		);
	}
}









