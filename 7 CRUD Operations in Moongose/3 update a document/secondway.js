// this is second way here we dont reterive document , we directly update it


async function updateCourse(id) {
    const result = await Course.update({ _id: id }, {
      $set: {
       author: 'Mosh',
       isPublished: false
      }
    });
     console.log(result);
  }
  
updateCourse('5a68fde3f09ad7646ddec17e');
// updateCourse('isme wo id likha hua h ')