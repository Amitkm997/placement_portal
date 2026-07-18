import CompanyCard from "../components/CompanyCard";

function Company(){

    const companies=[
        {
            companyName:"Amazon",
            salaryPackage:"45",
            location:"Noida"
        },
        {
            companyName:"Google",
            salaryPackage:"67",
            location:"Delhi"
        },
        {
            companyName:"Microsoft",
            salaryPackage:"90",
            location:"Banglore"
        },
        {
            companyName:"Flipkart",
            salaryPackage:"50",
            location:"Mumbai"
        },
        {
            companyName:"JP Morgon",
            salaryPackage:"75",
            location:"Pune"
        }

    ]
    return(
        <>
           {
             companies.map((cur)=><CompanyCard companyName={cur.companyName} salaryPackage={cur.salaryPackage} location={cur.location}/>)
           }
        </>
    )
}

export default Company;