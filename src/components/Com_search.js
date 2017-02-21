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
		
		return (<div>
			
			<div className={"search"}>
				<input type="text" name="search" ref="search" placeholder="Search..." />
				<input type="submit" value="submit" onClick={this.mapData} />
			</div>
			
			<div className={"list"}>
			{renderList}
			</div>
		

		</div>
		);
	}
}