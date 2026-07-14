import CompanyCard from "../components/CompanyCard";

function Company(){
    return(
        <>
           <CompanyCard companyName="Amazon" salaryPackage="45" location="Noida"/>
           <CompanyCard companyName="Google" salaryPackage="54" location="Delhi"/>
        </>
    )
}

export default Company;