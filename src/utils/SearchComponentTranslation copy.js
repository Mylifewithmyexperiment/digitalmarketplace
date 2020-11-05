
let final_data =
{
    standard_data: {
        component_Id: "",
        component_position: "",
        component_name: "",
        component_type: "",
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

export function translate_search_component(searchbox) {

    searchbox.map((items, i) => {

        final_data.standard_data.component_name = items.name
        final_data.standard_data.component_Id = items.slotId
        final_data.standard_data.component_position = items.position
     //    final_data.standard_data.media.component_media_fileName = items.media.map( ( m,i)=> m. );
        return final_data;

        // final_data.standard_data.media =items.map((media_data ,i) =>{
        //     media_data.lightboxBannerComponent
        // } )
    })

    console.log(" Standards data  after being translated " + JSON.stringify(final_data));
    return final_data;
}
