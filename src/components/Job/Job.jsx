import PropTypes from "prop-types";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
    // console.log(job);
    const {
        id,
        logo,
        job_title,
        company_name,
        remote_or_onsite,
        location,
        job_type,
        salary,
    } = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img
                    className="w-28 h-10 ml-4 mr-auto"
                    src={logo}
                    alt="Shoes"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="px-5 py-2 text-[#9873FF] font-extrabold border rounded border-[#7E90FE] mr-4">
                        {remote_or_onsite}
                    </button>
                    <button className="px-5 py-2 text-[#9873FF] font-extrabold border rounded border-[#7E90FE] mr-4">
                        {job_type}
                    </button>
                </div>
                <div className="mt-4 flex gap-4">
                    <h2 className="flex gap-2">
                        <MdLocationOn className="text-2xl" /> {location}
                    </h2>
                    <h2 className="flex gap-2">
                        <AiOutlineDollar className="text-2xl" /> {salary}
                    </h2>
                </div>
                <div className="card-actions">
                    <Link to={`/job/${id}`}>
                        <button className="btn btn-primary">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object,
};

export default Job;
