
// import { CONSTANTS,SEARCH_NAME,ALPHABETIC,ALPHABETICAL,DATE} from "../../../constants/Constants";

// // Sorting by alphabetical
// export function sortAlphabetical(object, key) {
//     if (!object) { return false; }
//     if (key == "") { return object; }

//     if (key == ALPHABETICAL) {
//         return _.orderBy(object, [data =>  data.displayName !== undefined && data.displayName.toLowerCase()], ["asc"]);
//     }

//     if (key == ALPHABETIC) {
//         return _.orderBy(object, [data => data.componentDisplayName !== undefined && data.componentDisplayName.toLowerCase()], ["asc"]);
//      }

//     if (key == DATE) {
//         return _.sortBy(object, function (o) { if (o.lastUsed === undefined) { return false; } return new moment(o.lastUsed); }).reverse();
//     }
//     if (key == MODIFIED_DATE) {
//         return _.sortBy(object, function (o) { if (o.updatedAt === undefined) { return false; } return new moment(o.updatedAt); }).reverse();
//     }
// }

// // Search common logic for template and alert list.
// export function fillterList(searchText, initialList, updateState, sorting) {
//     if (typeof initialList == "undefined") { return false; }
//     let minusOne = -1;
//     let updatedList = initialList;
//     let filterList = updatedList.filter(function (item) {
//         try {
//             if (_.hasIn(item, INTERNAL_NAMES.DISPLAY_NAME) && searchText) {
//                 return item.displayName.toLowerCase().search(
//                     searchText.toLowerCase()) !== minusOne;
//             } else if (!searchText) {
//                 return updatedList;
//             }
//         } catch (e) {
//             return null;
//         }
//     });

//     if (sorting == ALPHABETICAL) {
//         filterList = _.orderBy(filterList, [SEARCH_NAME], ["asc"]);
//     }

//     if (sorting == DATE) {
//         return _.sortBy(filterList, function (o) { if (o.lastUsed === undefined) { return false; } return new moment(o.lastUsed); }).reverse();
//     }

//     if (sorting == MODIFIED_DATE) {
//         return _.sortBy(filterList, function (o) { if (o.updatedAt === undefined) { return false; } return new moment(o.updatedAt); }).reverse();
//     }

//     if (updateState === CONSTANTS.FILTERED_FORM_LIST) {
//         this.setState({
//             inspectionList: {
//                 ...this.state.inspectionList,
//                 [updateState]: filterList
//             }
//         });
//     } else if (updateState === CONSTANTS.FILTERED_FORM_PREFRENCES) {
//         this.setState({
//             inspectionList: {
//                 ...this.state.inspectionList,
//                 [updateState]: filterList
//             }
//         });
//     } else {
//         this.setState({
//             [updateState]: filterList
//         });
//     }

//     return filterList;
// }

import _ from 'lodash';
export function  compare(object, key) {
    // Use toUpperCase() to ignore character casing
    if( !object) { return false };

    // if( object && object.studentName !==undefined ){
    //     return _.orderBy(data => data.studentName.toLowerCase(), ["desc"]);
    // }
    const firstGrade = object.grade.toUpperCase();
    const secondGrade = key.grade.toUpperCase();

    let comparison = 0;
    if (firstGrade > secondGrade) {
        comparison = 1;
    } else if (firstGrade < secondGrade) {
        comparison = -1;
    }
    return comparison;
}