import Department from "../models/Department.js";

const addDepartment = async (req, res) => {
    try {
        console.log("Incoming Department Data:", req.body); // 
        const { dept_name, description } = req.body;
        const newDepartment = new Department({
            dept_name,
            description
        })

        const savedDepartment = await newDepartment.save();

        return res.status(200).json({
            success: true,
            message: "new department added successfully",
            department: savedDepartment
        })

    } catch (error) {
        console.error("Add Department Error:", error);
        res.status(500).json({
            success: false,
            error: "add department server error"
        })
    }

}

export default addDepartment;