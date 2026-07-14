

function CompanyCard(props){
    // console.log(props)
    // props={
    //     companyName:"Amazon",
        // salaryPackge:45 
    // }
    //    let companyName="amazon"

    return(
        <>
        <div>
        <h1>{props.companyName}</h1>
          <p>Package:{props.salaryPackage} LPA</p>
          <p>Location:{props.location}</p>
        </div>
        </>
    )
}


export default CompanyCard;