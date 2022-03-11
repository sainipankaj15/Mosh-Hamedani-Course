// this is a way to delte : it will delete only one but if we want to delete many then we can deleteMany and we can also give any parameter instead of id 
// _id:id ki jagah hum isPublished = false likhe tho wo saare documents jaha isPublished = false h wo delete ho jaayge 
async function removeCourse(id) {
    const result = await Course.deleteOne({ _id: id });
    console.log(result);
                 
  }

removeCourse('5a68fde3f09ad7646ddec17e');







//yeh wale tarike se pahle wo given id se doucment ko search kargaa ushe course mai save kargaa then remove kar dega
async function removeCourse1(id) {
    const course = await Course.findByIDAndRemove({ _id: id });
    console.log(course);
                 
  }
removeCourse1('5a68fde3f09ad7646ddec17e');






// will delete all documents who has isPublished = false
async function removeCourse2(id) {
    const result = await Course.deleteMany({ isPublished: false });
    console.log(result);
                 
  }
removeCourse2();