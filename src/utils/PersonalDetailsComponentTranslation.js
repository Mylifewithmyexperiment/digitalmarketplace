
let final_data =
{
    slotId: "",
    component_type: "",
    name: "Shashi Jaiswal",
    experience: "2+ years+",
    branch: "CSE",
    technology: "React & Redux Developer",
    designation: "Software Engineerer",
    description: " is an experienced Software Developer with more than 2+years of experience in REACT JS. Demonstrated history of working in the information technology Data structure, algorithm, skilled in React, Redux,java script Java, spring, HTML, CSS. ",
    mobileNo: "+91 6202875803",
    skype: "Shashi.jaiswal80",
    email:"shashi.jaiswal17@gmail.com",
    location:"Ranchi, Jharkhand",
    first_company: "Sterlite Tech(AMD)(may2019-present)",
    second_company: "Reliance Jio(NHQ)(june2018-april2019)"

}

export function translate_personal_detail_component(personal_detail_box) {

    personal_detail_box.map((items, i) => {

        final_data.name = items.name
        final_data.component_type = items.component_type
        final_data.slotId=items.slotId
         // simillarly you can fill rest of the data
        return final_data;
    })

    console.log(" Standards data  after being translated " + JSON.stringify(final_data));
    return final_data;
}
