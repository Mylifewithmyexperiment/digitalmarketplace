import React from "react";
import { connect } from "react-redux";
import { component_details } from '../utils/CMSAdapter';
import { sendSearchBoxComponentIdAction } from "../action/index";

class SearchBox extends React.Component {
  constructor(props) {
    super();
    this.state ={
     component_type: "Search Box"
    }
  }

  // getposition = () => {
  //   let redux_data_element = [];
  //   if (this.props.element != null) {
  //     redux_data_element = this.props.element
  //     for (let index = 0; index < redux_data_element.length - 1; index++) {
  //       return redux_data_element[index].position;
  //     }
  //   }
  // };

  render() {
    var search_box_standard_data = component_details(this.props.search_text , this.state.component_type);
    let component_Id_after_translation = "";
    if (search_box_standard_data != null) {
      component_Id_after_translation = search_box_standard_data.standard_data;
    }
    return (
      <div>
        Searchbox component data fetched  from utility translation is :-{component_Id_after_translation.component_name} <br></br>
        <form className="form-inline searchForm my-2 my-lg-0 mx-auto">
          <input className="form-control" type="text" placeholder={component_Id_after_translation.component_position} aria-label="Search" />
        </form>

      </div>
    );
  }
}
 
const mapstatetoprpo = (state) => ({
  element: state.marketPlaceStandardData.searchboxdetails,
  new_position: state.marketPlaceStandardData.sendSearchBoxComponentIdAction

});
const mapdispatchtoprop = { sendSearchBoxComponentIdAction }
export default connect(mapstatetoprpo, mapdispatchtoprop)(SearchBox);

