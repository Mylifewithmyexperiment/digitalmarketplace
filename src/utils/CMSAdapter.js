import content from "../resources/mock_cms.json";
import { translate_miniCart_component } from "./MiniCartComponentTranslation";
import { translate_personal_detail_component } from "./PersonalDetailsComponentTranslation";
import { translate_search_component } from "./SearchComponentTranslation copy";

export function component_details(slot_id, component_type) {

    switch (component_type) {
        case "Mini Cart":
            const miniCartComponent = [];
            if (slot_id != null) {
                let j = 0;
                for (let index1 = 0; index1 < content.contentSlots.contentSlot.length; index1++) {
                    if (content.contentSlots.contentSlot[index1].name === component_type && content.contentSlots.contentSlot[index1].slotId === slot_id) {
                        miniCartComponent[j] = content.contentSlots.contentSlot[index1];
                        j++;
                     }
                }
                return translate_miniCart_component(miniCartComponent);
            }
            break;
        case "Search Box":
            const searchbox = [];
            if (slot_id != null) {
                let j = 0;
                for (let index1 = 0; index1 < content.contentSlots.contentSlot.length; index1++) {
                    if (content.contentSlots.contentSlot[index1].name === component_type && content.contentSlots.contentSlot[index1].slotId === slot_id) {
                        searchbox[j] = content.contentSlots.contentSlot[index1];
                        j++;
                    }
                }
                return translate_search_component(searchbox);
            }
            break;
            case "Basic Details":

                const personal_detail_box = [];
                if (slot_id != null) {
                    let j = 0;
                    for (let index1 = 0; index1 < content.contentSlots.contentSlot.length; index1++) {
                        if (content.contentSlots.contentSlot[index1].component_type === component_type && content.contentSlots.contentSlot[index1].slotId === slot_id) {
                            personal_detail_box[j] = content.contentSlots.contentSlot[index1];
                            j++;
                        }
                    }
                    return translate_personal_detail_component(personal_detail_box);
                }
           break;
        default:
            console.log("No valid content slot found for the given content slot Id :- " + slot_id)
            break;
    }
}
 