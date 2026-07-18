

function CompanyCard({companyName,salaryPackage,location}){
    // const{companyName,salaryPackage,location}=props;
    return(
        <>
        <div>
          <h1>{companyName}</h1>
          <p>Package:{salaryPackage} LPA</p>
          <p>Location:{location}</p>
        </div>
        </>
    )
}


export default CompanyCard;