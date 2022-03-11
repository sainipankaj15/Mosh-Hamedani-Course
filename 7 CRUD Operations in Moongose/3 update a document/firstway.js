// this is first method where we reterive docunment then update 

// not writing whole thing 
// just writing main thing

// Course ek model tha already hi above code mai wo wala code yaha nahi likah h 

async function updateCourse(id) {
    const course = await Course.findById(id);
    if (!course) return;

    course.isPublished = true; 
    course.author = 'Another Author';

    course.set({

        isPublished : true,
        author : 'Another author'

    });
    

    // line 10&11 = 13to 18 
    // inhe lines ka means same hi h like these are just 2 way 
    const result = await course.save();
    console.log(result);
  
}
 

updateCourse('yaha par id di jaaygi ');