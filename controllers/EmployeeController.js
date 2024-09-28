const Employee=require('../models/Employee')

//create
const createEmployee=async(req,res)=>{
    try{
        const{name,email,city,phone}=req.body
        const employee=new Employee({
            name,
            email,
            city,
            phone
        })
        await employee.save();
        res.status(201).json({message:"Data insertion is done"})

    }
    catch(error){
        console.log(error);
    }
    }
    module.exports={createEmployee
}