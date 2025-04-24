import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addJob, deleteJob } from "../redux/actions";
import { toast } from "react-toastify";

const About = () => {
    const [title, setTitle] = useState("");
    const [salary, setSalary] = useState("");
    const [showList, setShowList] = useState(false);

    const dispatch = useDispatch();
    const jobList = useSelector((state) => state.job.jobs);


    const handleSubmit = useCallback(() => {
        if (!title || !salary) {
            toast.error('Vui long nhap day du thong tin');
            return;
        }

        const newJob = {
            id: Date.now(),
            title,
            salary,
        };

        dispatch(addJob(newJob));
        setTitle("");
        setSalary("");

        toast.success('them job thanh cong')
    }, [title, salary, dispatch])

    const handleDelete = (jobId) => {
        dispatch(deleteJob(jobId));
    }

    return (
        <>
            <div style={{ marginBottom: "15px",marginTop: "25px"  }}>
                <input
                    type="text"
                    placeholder="Nhập chức danh"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={{ marginRight: "10px" }}
                />
                <input
                    type="number"
                    placeholder="Nhập lương"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                />
                <button onClick={handleSubmit} style={{ marginLeft: "10px" }}>
                    Submit
                </button>
            </div>
            <div style={{ marginBottom: "10px" }}>
                {jobList.length > 0 ? (
                    showList ? (
                        <button onClick={() => setShowList(false)}>Hide List</button>
                    ) : (
                        <button onClick={() => setShowList(true)}>Show List</button>
                    )
                ) : (
                    <p>No jobs available</p>
                )}
            </div>
            {showList && (
                <ul style={{ listStyleType: "none", padding:0 }}>
                    {jobList.map((job) => (
                        <li key={job.id} style={{padding: 6 }}>
                            <strong>{job.title}</strong> {job.salary} USD
                            <button
                                onClick={() => handleDelete(job.id)}
                                style={{ marginLeft: "10px", color: "red" }}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </>

    )
}

export default About;