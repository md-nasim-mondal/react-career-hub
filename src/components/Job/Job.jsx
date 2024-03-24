const Job = ({ job }) => {
    console.log(job);
    const {
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
                <img className="w-28 h-10 ml-4 mr-auto" src={logo} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="px-5 py-2 text-[#9873FF] font-extrabold border rounded border-[#7E90FE] mr-4">{remote_or_onsite}</button>
                    <button className="px-5 py-2 text-[#9873FF] font-extrabold border rounded border-[#7E90FE] mr-4">{job_type}</button>
                </div>
                <div className="card-actions">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Job;
