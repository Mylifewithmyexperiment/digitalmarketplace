
let final_data =
{
    standard_data: {
        component_Id: "",
        component_position: "",
        component_name: "",
        component_type:"",
        media: [
            {
                component_media_fileName: "",
                component_media_mime: "",
                component_media_altText: "",
                component_media_url: ""
            }
        ]
    }
}

export function translate_miniCart_component(miniCartComponent) {

    miniCartComponent.map((items, i) => {

        final_data.standard_data.component_name = items.name
        final_data.standard_data.component_Id = items.slotId
        final_data.standard_data.component_position = items.position
        return final_data;

        
    })

    console.log(" Standards data  after being translated " + JSON.stringify(final_data));
    return final_data;
}
