import axios from "axios";
import { useNavigate } from "react-router-dom";

const columns = (onDepartmentDelete) => [
    {
        name: "S No",
        cell: (row) => row.sno,
    },
    {
        name: "Department Name",
        cell: (row) => row.dept_name,
    },
    {
        name: "Action",
        cell: (row) => (
            <DepartButtons id={row._id} onDepartmentDelete={onDepartmentDelete} />
        ),
    },
];

const DepartButtons = ({ id, onDepartmentDelete }) => {
    const navigate = useNavigate();

    const handleDelete = async (id) => {
        const confirm = window.confirm("Do you want to delete?");

        if (confirm) {
            try {
                const response = await axios.delete(
                    `http://localhost:3000/api/department/${id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                    }
                );

                if (response?.data?.success) {
                    onDepartmentDelete(id);
                }
            } catch (error) {
                if (error?.response?.data?.success) {
                    alert(error?.response?.data?.error);
                }
            }
        }
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
            }}
        >
            <button
                style={{
                    backgroundColor: "green",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                }}
                onClick={() => {
                    navigate(`/admin-dashboard/department/${id}`);
                }}
            >
                Edit
            </button>
            <button
                style={{
                    backgroundColor: "purple",
                    color: "white",
                    border: "none",
                    padding: "5px 8px",
                }}
                onClick={() => {
                    handleDelete(id);
                }}
            >
                Delete
            </button>
        </div>
    );
};
export { columns, DepartButtons };
