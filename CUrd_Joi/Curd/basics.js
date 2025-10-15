const Joi=require('joi')// it helps to input validation
const express=require('express')
const app=express();

app.use(express.json())

const courses=[
    {id:1, name:"cource1"},
    {id:2, name:"cource2"},
    {id:3, name:"cource3"}
]

app.get('/' ,(req, res)=>{
    res.send("Hello world")

})
app.get('/api/courses',(req, res)=>{
    res.send(courses)
})
//extra-------------------------------
app.get('/api/posts/:year/:month', (req,res)=>{
     res.send({
    params: req.params,//return properties  /Access one specific resource
    query: req.query//return query paramiter /Filter or search results
  });
})
//-------------------------------
app.get('/api/courses/:id', (req,res)=>{
    const course=courses.find((c)=>{
       return c.id===parseInt(req.params.id)
    })
    if(!course) return res.status(404).send("course of the given id is not found");

    res.send(course)
})

//-------------------------
app.post('/api/courses', (req,res)=>{
    const {error, value}=validateCource(req.body);
    if(error) return res.status(404).send(error.details[0].message);
            

    const course={
        id:courses.length+1,
        name:value.name
    };
    courses.push(course)
    res.send(course)
})
app.put('/api/courses/:id',(req,res)=>{
    const course=courses.find((c)=>{
       return c.id===parseInt(req.params.id)
    })
    if(!course) return res.status(404).send("course of the given id is not found");
    const {error, value}=validateCource(req.body);
    if(error) return res.status(404).send(error.details[0].message);
    course.name=value.name;
    res.send(course)
})
app.delete('/api/courses/:id',(req,res)=>{
    const course=courses.find((c)=> c.id===parseInt(req.params.id));
    if(!course) return res.status(404).send("id not present");
    const index=courses.indexOf(course);
    courses.splice(index, 1)
    res.send(course)
})
function validateCource(course){
    const schema=Joi.object({
    name: Joi.string().min(3).required()
  });
             return schema.validate(course);
}

const port=process.env.PORT ||3000;
app.listen(port, ()=>{
    console.log(`server is running on ${port}...`)
})