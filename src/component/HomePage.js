import React from "react";
import PersonalDetails from "./PersonalDetails";
// import MiniCartComponent from "./MiniCartComponent";
// import SearchBox from "./SearchBox";

class HomePage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      // searchBoxID: "SearchBoxSlot",
      // banner_component_id : "MiniCartSlot",
      personal_details_id :"personalDetails"
    }
  }

  render() {
    return (
      <div>
        
        <PersonalDetails personal_details_id ={this.state.personal_details_id} ></PersonalDetails>
        {/* <SearchBox search_text={this.state.searchBoxID}> </SearchBox>
        <MiniCartComponent minicart_text = {this.state.banner_component_id} ></MiniCartComponent> */}
       </div>
    );
  }
}
export default HomePage;
